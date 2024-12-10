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

                    
                # # Select the chrommium profile to allow or limit tracking
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


                if adblock: print("[INFO]: AdBlock extension is loaded.")
                print(f"[INFO]: {"Limited" if untracked else "Allowed"} tracking profile loaded.")
               
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
            # We deactivate this function when measurement are performed since mounted volumes (in containers used by GMT) are read only.
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
                
    def retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY):
        '''
        This decorator allows to retry functions that fail
        '''
        def wrapper_maker(func):
            @functools.wraps(func)
            def wrapper(self, *args, **kwargs):
                for attempt in range(max_attempts):
                    try:
                        return func(self, *args, **kwargs)
                    except Exception as e:
                        print(f"[ERROR] : Function {func.__name__} : Attempt {attempt + 1}/{max_attempts} failed : {str(e)}")
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
            remains = self.time_limit + self.start - now
            try:
                if remains > 0:
                    print("[INFO] : {} Seconds left".format(round(remains)))
                    return func(self, *args, **kwargs)
                else:
                    print(f"[TIMEOUT] : Won't execute {func.__name__}.")
            except Exception as e:
                traceback.print_exc()
                print(f"[ERROR] : ", str(e))
        return wrapper
    
    def pause(self, delay=None):
        if delay is None:
            time.sleep(TIME_BETWEEN_ACTIONS)
        else: time.sleep(delay)
        
    def close_browser(self):
        self.driver.quit()


    def find(self, selector):
        """
        Use the selector (selector type, target) to grab an html element
        """
        return WebDriverWait(self.driver, WAIT_LIMIT).until(
            EC.visibility_of_element_located(selector), f"[ERROR] : Couldn't find {selector[1]} after {WAIT_LIMIT} seconds"
            )
    
    def click(self, selector):
        """
        Use the selector (selector type, target) to click on an html element
        """
        target = self.find(selector)
        WebDriverWait(self.driver, WAIT_LIMIT).until(
            EC.element_to_be_clickable(target),
            f'[ERROR] : {selector[1]} is not clickable after {WAIT_LIMIT} seconds'
            )
        target.click()

    def type(self, selector, input, hit_enter=False):
        """
        Use the selector (selector type, target) to type in an input html element
        """
        target = self.find(selector)
        for char in input:
            target.send_keys(char)
        if hit_enter:
            target.send_keys(Keys.ENTER)
    

    def wait_page_loaded(self, url_to_be_loaded):
        """
        Wait until the page is fully loaded and the URL is the expected one.
        """
        # Wait for the URL to change to the expected one
        WebDriverWait(self.driver, MAX_PAGE_LOAD_TIME).until(
            lambda driver: driver.current_url == url_to_be_loaded
        )

        # Wait for the document to be completely loaded (readyState === 'complete')
        WebDriverWait(self.driver, MAX_PAGE_LOAD_TIME).until(
            lambda driver: driver.execute_script('return document.readyState') == 'complete'
        )


    def wait_for_visual_readiness(self):
        """
        Wait until the page is visually ready: meaning 
        the layout is stable, and it's ready for user interaction.
        """
        
        # Step 1: Wait for the page to finish loading and rendering, checking the performance data
        try:
            WebDriverWait(self.driver, MAX_PAGE_LOAD_TIME).until(
                lambda driver: driver.execute_script("""
                    return window.performance.timing.loadEventEnd > 0 && 
                        window.performance.timing.domContentLoadedEventEnd > 0;
                """)
            )
            print("Step 1: Page load and rendering completed.")
        except Exception as e:
            print("Step 1 failed: Page load and rendering did not complete.")
            print(f"Error: {e}")
            return

        # self.pause(15)
        # paintEntries = self.driver.execute_script("""
        #              var performance = window.performance;
        #              var largestContentfulPaint = performance.getEntriesByType('paint')
        #              return largestContentfulPaint;
        #         """)
        
        # print(f"paintEntries = {paintEntries} .")

        # # Step 2: Check that the page layout has settled (no more reflows happening)
        # try:
        #     WebDriverWait(self.driver, MAX_PAGE_LOAD_TIME).until(
        #         lambda driver: driver.execute_script("""
        #             var performance = window.performance;
        #             var largestContentfulPaint = performance.getEntriesByType('paint')
        #                 .filter(function(entry) { return entry.name === 'largest-contentful-paint'; });
        #             return largestContentfulPaint.length > 0 && largestContentfulPaint[0].startTime > 0;
        #         """)
        #     )
        #     print("Step 2: Layout is stable (LCP has been recorded).")
        # except Exception as e:
        #     print("Step 2 failed: Layout is not stable.")
        #     print(f"Error: {e}")
        #     return

            # Step 2: Ensure there are no ongoing layout shifts
        try:
            WebDriverWait(self.driver, MAX_PAGE_LOAD_TIME).until(
                lambda driver: driver.execute_script("""
                    var layoutShifts = performance.getEntriesByType('layout-shift');
                    return layoutShifts.every(shift => shift.hadRecentInput === false);  // No unexpected shifts
                """)
            )
            print("Step 2: Layout is stable (no unexpected layout shifts).")
        except Exception as e:
            print("Step 2 failed: Layout is unstable (unexpected layout shifts).")
            print(f"Error: {e}")
            return

        # Step 3: Optional - Ensure there are no ongoing animations (for cases where transitions are being used)
        try:
            WebDriverWait(self.driver, MAX_PAGE_LOAD_TIME).until(
                lambda driver: driver.execute_script("""
                    var animations = document.getAnimations();
                    return animations.length === 0;  // No ongoing animations
                """)
            )
            print("Step 3: No ongoing animations.")
        except Exception as e:
            print("Step 3 failed: There are ongoing animations.")
            print(f"Error: {e}")
            return

        # Step 4: Ensure critical elements are fully visible (e.g., body tag)
        try:
            WebDriverWait(self.driver, MAX_PAGE_LOAD_TIME).until(
                EC.visibility_of_element_located((By.TAG_NAME, 'body'))
            )
            print("Step 4: Critical elements are visible.")
        except Exception as e:
            print("Step 4 failed: Critical elements are not visible.")
            print(f"Error: {e}")
            return


    def file_input(self, selector, absolute_data_path):
        input_target = WebDriverWait(self.driver, WAIT_LIMIT).until(
            EC.presence_of_element_located(selector),
            f"[ERROR] : Couldn't find file_input element [{selector[1]}] after {WAIT_LIMIT} seconds"
            )
        input_target.send_keys(absolute_data_path)


# ===================================================================================================================================
# =============== Gmail Session =====================================================================================================        
# ===================================================================================================================================


class GmailSession(Session):
    

    def __init__(self, user_address, user_psw, browser_name, adblock, untracked, time_limit=TIME_LIMIT):
        super().__init__(user_address, user_psw, browser_name, adblock, untracked, time_limit)

    
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def login(self):
        '''
        Log in to the Gmail user account
        '''
        try:
            # Open the Gmail login page
            self.driver.get(GMAIL_URL)
            self.pause()

            # Enter user email
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.ID, "identifierId")))
            self.driver.find_element(By.ID, "identifierId").send_keys(self.user_address)
            self.pause()

            # Click on the next button
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-vQzf8d")))
            self.driver.find_element(By.CSS_SELECTOR, ".VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-vQzf8d").click()
            self.pause()

            # Enter user password
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.NAME, "Passwd")))
            self.driver.find_element(By.NAME, "Passwd").click()
            self.driver.find_element(By.NAME, "Passwd").send_keys(self.psw)
            self.driver.find_element(By.NAME, "Passwd").send_keys(Keys.ENTER)
            self.pause()

            print("[INFO] : Logged in.")

            # Wait for the page to load
            self.pause(10)
            
        except Exception as e:
            self.home_page(force=True)
            raise e
            
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def logout(self):
        '''
        Logout of the connected account
        '''
        try:
            # Click on the user logo
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//header/div[2]/div[3]/div[1]/div[2]/div/a"))).click()
            self.pause()

            # Click on the logout link
            self.driver.switch_to.frame(2)
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//a[contains(.,\'Sign out\')]")))
            self.driver.find_element(By.XPATH, "//a[contains(.,\'Sign out\')]").click()
            self.pause()

            print("[INFO] : Logged out.")
        
        except Exception as e:
            self.home_page(force=True)
            raise e
        
   
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event      
    def send_mail(self, to, subject, content, attached_file_size):
        '''
        Send a mail to the specified recipient with the given subject and content
        '''
        try:

            # Click to start composing an email
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, ".T-I-KE")))
            self.driver.find_element(By.CSS_SELECTOR, ".T-I-KE").click()
            self.pause()
            
            # Move mouse out of left pane
            element = self.driver.find_element(By.CSS_SELECTOR, "body")
            actions = ActionChains(self.driver)
            actions.move_to_element(element).perform()
        
            # Input the recipient address
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//div/div/input")))
            self.driver.find_element(By.XPATH, "//div/div/input").send_keys(to)
            self.pause()
        
            # Type the subject
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[3]/input")))
            self.driver.find_element(By.XPATH, "//div[3]/input").send_keys(subject)
            self.pause()
        
            # Input the mail body
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//td[2]/div[2]/div/div")))
            mail_body_element = self.driver.find_element(By.XPATH, "//td[2]/div[2]/div/div")
            self.driver.execute_script("arguments[0].innerText = arguments[1]", mail_body_element, content)
            self.pause()

            # Attach a file
            if attached_file_size:
                script_dir = os.path.dirname(os.path.abspath(__file__))
                relative_path = ATTACHED_FILES + f"{attached_file_size}MiB.txt"
                attached_file_path = os.path.normpath(os.path.join(script_dir, relative_path))
                self.driver.find_element(By.NAME, "Filedata").send_keys(attached_file_path)
                self.pause(2*attached_file_size)
        
            # Click the send button
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[4]/table/tbody/tr/td/div/div[2]/div")))
            self.driver.find_element(By.XPATH, "//div[4]/table/tbody/tr/td/div/div[2]/div").click()
            self.pause()
            self.pause()
            self.pause()

            self.stats["sent_mails"][attached_file_size] += 1
            print("[INFO] : Mail Sent.")
            
        except Exception as e:
            self.home_page(force=True)
            raise e
        
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event  
    def filter(self):
        '''
        Show only unread emails
        '''
        try:    
            # Wait for the search bar to be clickable
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.NAME, "q")))
    
            # Find the search bar element
            search_bar = self.driver.find_element(By.NAME, "q")
    
            # Clear any existing text in the search bar
            search_bar.clear()
    
            # Type the filter criteria (inbox + unread) and press Enter
            search_bar.send_keys("is:unread in:inbox")
            search_bar.send_keys(Keys.ENTER)
            
            self.pause()
            self.pause()
            self.pause()
            print("[INFO] : Filtered emails, showing unread only.")
        
        except Exception as e:
            self.home_page(force=True)
            raise e
   
    

    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def home_page(self, force=False):
        '''
        This function clicks on the homepage link (i.e. : mailbox)
        If force is enable or if it fails then tries to refresh the page with the "Outlook" link
        '''
        # Wait for 1 seconds then refresh
        if force:
            self.pause()
            self.driver.get("https://mail.google.com/mail/u/0/#inbox")
            try:
                WebDriverWait(self.driver, 10).until(EC.alert_is_present(),'Timed out waiting for popup to appear.')
                alert = self.driver.switch_to.alert
                alert.accept()
                self.stats["refresh"] += 1
                print("[DEBUG] : Alert accepted")
                self.pause()

            except TimeoutException:
                temp = "no alert"
            
            print("[DEBUG] : Forced Refresh")
        else:
            try:
                # Click on inbox
                WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/div/div/div/div/div/div/div/div/div[2]"))).click()
                self.pause()
                
                # Move mouse out of left pane
                element = self.driver.find_element(By.CSS_SELECTOR, "body")
                actions = ActionChains(self.driver)
                actions.move_to_element(element).perform()

                self.stats["refresh"] += 1

            except Exception as e:
                print(f"[ERROR] : An error occurred while clicking 'mailbox' link. Trying to force refreshing to homepage")
                try:
                    self.home_page(force=True)
                except Exception as e:
                    print("[ERROR] : Unable to reload home page. Program will exit.")
                    sys.exit(1)
        
                    
          
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event    
    def delete_drafts(self):
        '''
        This function removes drafts as it perturbs the reply function
        '''
        try:

            # Click on folder Drafts
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[5]/div/div/div")))
            self.driver.find_element(By.XPATH, "//div[5]/div/div/div").click()
            print(f"[DEBUG] : Clicked on folder Draft")
            
            # Move mouse out of left pane
            element = self.driver.find_element(By.CSS_SELECTOR, "body")
            actions = ActionChains(self.driver)
            actions.move_to_element(element).perform()
            
            # Click on Select All
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/div[2]/div/div/div/div/div/div/span")))
            self.driver.find_element(By.XPATH, "//div[2]/div[2]/div/div/div/div/div/div/span").click()
            print(f"[DEBUG] : Clicked on select All")

            try:
                # Click on Delete
                WebDriverWait(self.driver, 3).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/div/div/div/div[2]/div/div")))
                self.driver.find_element(By.XPATH, "//div[2]/div/div/div/div[2]/div/div").click()
                print(f"[DEBUG] : Clicked on Delete")
                self.pause()
                self.pause()
                self.pause()
                self.pause()
                self.pause()
                
            except Exception as e:
                print(f"[INFO] : There is no draft")
                self.home_page(force=True)
                return

            # Come back to home page (So that it takes effect)
            self.home_page(force=True)
            print("[INFO] : Drafts deleted.")
            
        except Exception as e:
            self.home_page(force=True)
            raise e
    

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_sender_address(self):
        '''
        Retrieves the sender's address the first mail in the list
        '''
        try:
            # Get the sender address
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//div[6]/div/div/table/tbody/tr/td[5]/div[2]/span/span")))
            sender = self.driver.find_element(By.XPATH, "//div[6]/div/div/table/tbody/tr/td[5]/div[2]/span/span").get_attribute("email")
            print("[DEBUG] : Got the address of the sender")
            self.pause()

            # If the sender the user_address check the second span (this is because it's a reply to a mail that we sent)
            if sender == self.user_address:
                print("[DEBUG] : Look in the second Span. Address found is the user's")
                sender = self.driver.find_element(By.XPATH, "//div[6]/div/div/table/tbody/tr/td[5]/div[2]/span/span[3]").get_attribute("email")
                print("[DEBUG] : Found in second Span")
                self.pause()
                

            print("[INFO] : Sender = {}.".format(sender))
            return sender
        
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            raise e
        

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_subject(self):
        '''
        Returns the subject of an opened mail
        '''
        try:
            element = WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//div[2]/div/div/div[2]/div/h2")))
            print(f"[INFO] : Found the email subject : {element.text}.")
            self.pause()
            return element.text
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            self.read_first()
            raise e
            
    
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def read_first(self):
        '''
        Opens the the first mail in the list
        '''
        try:
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[6]/div/div/table/tbody/tr")))
            self.driver.find_element(By.XPATH, "//div[6]/div/div/table/tbody/tr").click()
            self.stats["read_mails"] += 1
            print("[INFO] : Read first email.")
            self.pause(5)
        
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            raise e    
    
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def delete_first(self):
        '''
        delete an opened mail
        '''
        try:

            # Click on delete icon
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/div/div/div[2]/div[3]/div"))).click()
            self.stats["deleted_mails"] += 1
            print("[INFO] : Deleted the first email.")
            self.pause()
            self.pause()
        
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            self.read_first()
            raise e

    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def reply(self, answer):
        '''
        Answer to an opened email
        '''
        try:
            # Click on reply
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/div/div/div/table/tbody/tr/td[2]/div/div/span")))
            self.driver.find_element(By.XPATH, "//div[2]/div/div/div/table/tbody/tr/td[2]/div/div/span").click()
            print("[DEBUG] : Clicked on reply")
            self.pause()

            # Write answer in the editor
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//div[3]/div/table/tbody/tr/td[2]/div[2]/div/div")))
            element = self.driver.find_element(By.XPATH, "//div[3]/div/table/tbody/tr/td[2]/div[2]/div/div")
            self.driver.execute_script("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = arguments[1]}", element, answer)
            print("[DEBUG] : Edited Editor Content")
            self.pause()
                
            # Click the send button
            self.driver.find_element(By.XPATH, "//div[4]/table/tbody/tr/td/div/div[2]/div").click()
            print("[DEBUG] : Clicked the send button")
            self.pause()
            self.pause()

            # home page
            self.home_page()
            
            self.stats["answered_mails"] += 1
            print("[INFO] : Response sent.")
            self.pause()
            
            
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            self.read_first()
            raise e