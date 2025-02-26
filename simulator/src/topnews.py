# standard libraries
import os
import sys
import threading
import time
import functools
import csv
import traceback
import fnmatch
from datetime import datetime


# 3rd parties libraries
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException, NoSuchElementException, StaleElementReferenceException

# local imports
from constants import *
import utils

URLS = [
    'https://google.com', 
    'https://yahoo.com',  
    'https://bing.com',
    'https://wikipedia.org',
    'https://weather.com',
    'https://cnn.com',
    'https://foxnews.com',
    'https://nytimes.com',
    'https://sohu.com',
    'https://taobao.com'
]



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
                options = webdriver.ChromeOptions()
                options.binary_location = chrome_binary_path
                
                if IS_CONTAINER:
                    options.add_argument('--no-sandbox')  # Required for running in Docker
                    options.add_argument('--disable-dev-shm-usage')  # Required for running in Docker

                    
                # If adblock is required load the extension
                # if adblock:

                #     adblock_extension_path = os.path.join(os.path.dirname(__file__), ADBLOCK_FOLDER)
                #     options.add_argument(f"--load-extension={adblock_extension_path}")
                
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

                # Initialize WebDriver with Chrome binary path and options
                self.driver = webdriver.Chrome(options=options)
               
        # set Window Size
        self.driver.set_window_size(width=1296, height=736)


class Session:
        
    def __init__(self, browser_name, adblock, untracked):

        self.driver = WebDriver(browser_name, adblock, untracked).driver
    
    
    def log_event(func):
        '''
        Decorator to log each event of a session
        '''
        @functools.wraps(func)
        def wrapper(self, *args, **kwargs):
            action = func.__name__
            if 'URL' in kwargs:
                action += f"_{kwargs['URL']}"
            print(f"START: {action}")
            output = func(self, *args, **kwargs)
            print(f"END: {action}")

            return output
            
        return wrapper
    
    def pause(self, delay=None):
        if delay is None:
            time.sleep(DEFAULT_PAUSE_DELAY)
        else: time.sleep(delay)
    
    def close_browser(self):
        self.driver.quit()

    def scroll_down(self, max_stagnation=3):
        """
        Scrolls down the page by a dynamic amount (1% of the page height) using Selenium until the end of the page is reached
        or after 3 consecutive scrolls without position change.

        :param max_stagnation: The number of times the scroll position can stagnate before stopping.
        """
        # Get the total height of the page and calculate scroll height (1% of the total page height)
        total_height = self.driver.execute_script("return document.body.scrollHeight")
        scroll_height = total_height // 5  # Scroll down by 1% of the page height

        # Get the current scroll position
        current_position = self.driver.execute_script("return window.scrollY")
        stagnation_count = 0  # Counter for stagnation occurrences

        while stagnation_count < max_stagnation:
            # Scroll down by the calculated amount (1% of the total page height)
            self.driver.execute_script(f"window.scrollTo(0, {current_position + scroll_height});")
            
            # Pause to allow content to load
            self.pause(5)

            # Get the new scroll position
            new_position = self.driver.execute_script("return window.scrollY")
            
            # If the scroll position hasn't changed, increment the stagnation counter
            if current_position == new_position:
                stagnation_count += 1
                print(f"Stagnation {stagnation_count}/{max_stagnation}: Current position: {current_position}")
            else:
                stagnation_count = 0
                print(f"Position changed. Current position: {current_position}")
            
            # Update the current position for the next iteration
            current_position = new_position
            
        print(f"Reached maximum stagnation of {max_stagnation}. Current position: {current_position}")

    
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

            while True:

                try:
                    wait_limit = max(MAX_PAGE_LOAD_TIME - (time.time() - start), 0) 
                    # Wait for the URL to change to the expected one
                    WebDriverWait(self.driver, wait_limit).until(
                        EC.url_contains(url_to_be_loaded), # compare current url with expected one and allows wildcards like */?
                        f"URL didn't change to '{url_to_be_loaded}' after {MAX_PAGE_LOAD_TIME}s." 
                    )
                    break # If previous wait passes we quit the loop
                except TimeoutException as toe:
                    raise toe

                except Exception as e:
                    self.pause(0.5)                

        
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

        self.pause(WAIT_AFTER_PAGE_LOADED)
    
    @log_event
    def surf_to(self, URL):
        '''
        Log in to the mail provider website
        '''
        # Surf to the URL
        self.driver.get(URL)
        # Wait for the page to load
        self.wait_page_loaded()
        # Scroll down
        # self.scroll_down()

    def run(self):
        print('START: session')
        for URL in URLS:
            try:
                self.surf_to(URL=URL)
            except Exception:
                print(f'[ERROR] : Surfing to {URL} - {Exception}')
            self.pause(PAUSE_BTW_RUN)
        print('END: session')
        self.close_browser()


def handle_arguments():
    '''
    This function handles arguments passed to the script
    '''
    
    if len(sys.argv) == 2:
        if sys.argv[1] == 'adblock':
            adblock = True
        elif sys.argv[1] == 'noadblock':
            adblock = False
        else:
            print("Usage: python topnews.py <adblock | noadblock>")
            sys.exit(1)
    else:
        print("Usage: python topnews.py <adblock | noadblock>")
        sys.exit(1)

    return adblock

def main():

    adblock = handle_arguments()
    session = Session(browser_name=CHROME, adblock=adblock, untracked=adblock)
    session.run()

    
if __name__ == "__main__":   
    main()