# standard libraries
import os
import sys
import threading
import time
import functools
import csv
import traceback
from datetime import datetime


# 3rd parties libraries
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException

# local imports
from constants import *


class WebDriver():
    def __init__(self, browser_name, adblock=False, untracked=False):
        match browser_name:
            case CHROME:
                try:
                    # Find binaries path for chrome and chrome-driver
                    chrome_binary_path = os.environ.get("CHROMIUM_PATH", "/usr/bin/chromium-browser")
                    chromedriver_binary_path = os.environ.get("CHROMIUM_DRIVER_PATH", "/usr/bin/chromedriver")
                    if chromedriver_binary_path == "" or chrome_binary_path == "":
                        raise Exception
                except:
                    print("[ERROR] : Make sure the environment variables CHROMIUM_PATH and CHROMIUM_DRIVER_PATH are properly set.\n\
                          They should point to the respective binaries.")
                    exit(1)
                
                # Prepare service and options
                #service = webdriver.ChromeService(executable_path=chromedriver_binary_path)
                options = webdriver.ChromeOptions()
                options.binary_location = chrome_binary_path
                
                if IS_CONTAINER:
                    # Set options and service for running in a container (e.g., using Chromium)
                    #options.add_argument('--headless') # Required for running in Docker
                    #options.add_argument('--disable-gpu')  # Required for running in Docker
                    options.add_argument('--no-sandbox')  # Required for running in Docker
                    options.add_argument('--disable-dev-shm-usage')  # Required for running in Docker

                    
                # If adblock is required load the extension
                if adblock:

                    adblock_extension_path = os.path.join(os.path.dirname(__file__), ADBLOCK_FOLDER)
                    options.add_argument(f"--load-extension={adblock_extension_path}")

                    
                # Select the chrommium profile to allow or limit tracking
                if untracked:
                    profile = UNTRACKED_PROFILE
                else:
                    profile = TRACKED_PROFILE
                if IS_MEASURED:
                    profiles_dir = CONTAINER_CHROME_PROFILES
                else : 
                    profiles_dir = os.path.normpath(os.path.join(os.path.dirname(__file__), CHROME_PROFILES))
                options.add_argument(f"user-data-dir={profiles_dir}")
                options.add_argument(f'profile-directory={profile}')

                # Add the System's Certificate Authorities (CA) trust store so that our
                # own CAs (added to the system trusted store) are considered as valid by chromium
                options.add_argument("ignore-certificate-errors")

                # Initialize WebDriver with Chrome binary path and options
                self.driver = webdriver.Chrome(options=options)


                if adblock: print("[INFO]: AdBlock extension is loaded.")
                print(f"[INFO] : {"Limited" if untracked else "Allowed"} tracking profile loaded.")
               
        # set Window Size
        self.driver.set_window_size(width=1296, height=736)

#========================================================================================================================
class Session:
              
    def __init__(self, user_address, psw, browser_name, adblock, untracked, time_limit=TIME_LIMIT):
        self.user_address = user_address
        self.psw = psw
        self.start = time.time()
        self.time_limit = time_limit
        self.driver = WebDriver(browser_name, adblock, untracked).driver

        
        # Prepare log file name and directories : 
        timestamp = str(datetime.today().replace(microsecond=0)).replace(" ","_").replace(":", "-")
        script_dir = os.path.dirname(os.path.abspath(__file__))
        relative_path = LOG_FOLDER + self.user_address + timestamp
        self.log_file_path = os.path.join(script_dir, relative_path)
        # Create the directories if they don't exist
        os.makedirs(os.path.dirname(self.log_file_path), exist_ok=True)

        self.first = True
        self.stats = {"sent_mails" : {
                                0: 0,
                                5: 0,
                                10: 0,
                                15: 0,
                                20: 0,
                                25: 0
                            },
                      "read_mails" : 0,
                      "answered_mails" : 0,
                      "deleted_mails" : 0,
                      "refresh" : 0}
    
    
    def log_event(func):
        '''
        Decorator to log each event of a session
        '''
        @functools.wraps(func)
        def wrapper(self, *args, **kwargs):
            # We deactivate this function when measurements are performed since mounted volumes (in containers used by GMT) are read only.
            if not IS_MEASURED :

                output = func(self, *args, **kwargs)
                
                # If function didn't raise error we assume everything went fine and log execution timing
                with open(self.log_file_path + ".log", 'a', newline='', encoding='utf-8') as log:
                    log_writer = csv.writer(log)
                    if self.first:
                        self.first = False
                        log_writer.writerow(["Timestamp", "Event", "Description"])
                    log_writer.writerow([datetime.now(), func.__name__, func.__doc__])

            # Here we print the exact time when the function is called and when it ends so we can extract the energy associated with each function
            # With the Green Metric Tool
            else:
                print(f"START: {func.__name__}")
                output = func(self, *args, **kwargs)
                print(f"END: {func.__name__}")

            return output
            
        return wrapper
                
    def retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY, *prerequisite_actions):
        '''
        This decorator allows to retry functions that fail. prerequisite_actions
        is a list of actions to perform before retrying (under the form lambda self : self.action(*args))
        '''
        def wrapper_maker(func):

            @functools.wraps(func)
            def wrapper(self, *args, **kwargs):
                for attempt in range(max_attempts):
                    try:
                        # Perform prerequisite actions if needed
                        if attempt > 0:
                            for action in prerequisite_actions:
                                action(self)
                                
                        # Run function
                        return func(self, *args, **kwargs)
                    
                    except Exception as e:
                        msg = e.msg if isinstance(e, TimeoutException) else str(e)
                        print(f"[ERROR] : Function {func.__name__} : Attempt {attempt + 1}/{max_attempts} failed : {msg}")
                        if delay:
                            time.sleep(delay)
                raise RuntimeError(f"[ERROR] : Failed to execute {func.__name__} after {max_attempts} attempts.")
            return wrapper
        
        return wrapper_maker

    def time_limited_execution(func):
        '''
        This decorator allows a function to be executed only if time since start is smaller than time_limit
        '''
        @functools.wraps(func)
        def wrapper(self, *args, **kwargs):
            now = time.time()
            remains = self.start + self.time_limit - now
            try:
                if remains > 0:
                    print("[INFO] : Executing '{}' ({} Seconds left)".format(func.__name__, round(remains)))
                    return func(self, *args, **kwargs)
                else:
                    print(f"[TIMEOUT] : Won't execute {func.__name__}.")
            except Exception as e:
                print(str(e))
        return wrapper
    
    def pause(self, delay=None):
        if delay is None:
            time.sleep(TIME_BETWEEN_ACTIONS)
        else: time.sleep(delay)
        
    def close_browser(self):
        self.driver.quit()

    # ***************************************************************************************************************
    # User Interactions
    # ***************************************************************************************************************
    def find(self, selector):
        """
        Use the selector (selector type, target) to grab an html element
        """
        return WebDriverWait(self.driver, WAIT_LIMIT).until(
            EC.visibility_of_element_located(selector),
            f"Couldn't find HTML element using selector '{selector[1]}' after {WAIT_LIMIT} seconds"
            )
    
    def click(self, selector):
        """
        Use the selector (selector type, target) to click on an html element
        """
        target = self.find(selector)
        WebDriverWait(self.driver, WAIT_LIMIT).until(
            EC.element_to_be_clickable(target),
            f"HTML element not clickable using selector '{selector[1]}' after {WAIT_LIMIT} seconds"
            )
        target.click()

    def type(self, selector, input, hit_enter=False):
        """
        Use the selector (selector type, target) to type in an input html element
        """
        target = self.find(selector)
        target.clear()
        for char in input:
            target.send_keys(char)
        if hit_enter:
            target.send_keys(Keys.ENTER)

    def file_input(self, selector, absolute_data_path):
        """
        Feed the local path of file to upload to the file input HTML element pointed by selector.
        """
        input_target = WebDriverWait(self.driver, WAIT_LIMIT).until(
            EC.presence_of_element_located(selector),
            f"Couldn't find file_input HTML element using selector '{selector[1]}' after {WAIT_LIMIT} seconds"
            )
        input_target.send_keys(absolute_data_path)
    
    def move_mouse_to(self, selector):
        target = self.find(selector)
        actions = ActionChains(self.driver)
        actions.move_to_element(target).perform()
        self.pause(1)

    def switch_frame(self, frame_number = None, frame_name = None, iframe_element = None, alert = False):
        
        if alert:
            WebDriverWait(self.driver, WAIT_LIMIT).until(
                EC.alert_is_present(),
                'Timed out waiting for popup to appear.'
            )
            return self.driver.switch_to.alert
        elif frame_number:
            self.driver.switch_to.frame(frame_number)
        elif frame_name:
            self.driver.switch_to.frame(frame_name)
        elif iframe_element:
            iframe = self.find(iframe_element)
            self.driver.switch_to.frame(iframe)
        else:
            self.driver.switch_to.default_content()

    def wait_page_loaded(self, url_to_be_loaded=None):
        """
        Wait until :
        the URL is the expected one (if provided),
        the page is fully loaded,
        the page is ready: meaning the layout is stable, and ready for user interaction..
        """
        
        start = time.time()
        wait_limit = MAX_PAGE_LOAD_TIME

        if url_to_be_loaded:

            # Wait for the URL to change to the expected one
            WebDriverWait(self.driver, wait_limit).until(
                lambda driver: driver.current_url == url_to_be_loaded,
                f"URL didn't change to '{url_to_be_loaded}' after {MAX_PAGE_LOAD_TIME}s." 
            )


        wait_limit = max(MAX_PAGE_LOAD_TIME - (time.time() - start), 0)

        # Wait for the page to finish loading and rendering, checking the performance data
        WebDriverWait(self.driver, wait_limit).until(
            lambda driver: driver.execute_script("""
                return window.performance.timing.loadEventEnd > 0 && 
                    window.performance.timing.domContentLoadedEventEnd > 0;
            """),
            f"Window.performance.timing.loadEventEnd <= 0 OR \
            Window.performance.timing.domContentLoadedEventEnd <= 0 after {MAX_PAGE_LOAD_TIME}s."
        )

        wait_limit = max(MAX_PAGE_LOAD_TIME - (time.time() - start), 0)

        # Wait until there is no ongoings layout shifts
        WebDriverWait(self.driver, wait_limit, poll_frequency=1).until(
                lambda driver: driver.execute_script("""
                    var layoutShifts = performance.getEntriesByType('layout-shift');
                    return layoutShifts.every(shift => shift.hadRecentInput === false);  // No unexpected shifts
                """),
                f"There are still ongoing layout shifts after {MAX_PAGE_LOAD_TIME}s."
        )