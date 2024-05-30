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
    def __init__(self, browser_name):
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
                service = webdriver.ChromeService(executable_path=chromedriver_binary_path)
                options = webdriver.ChromeOptions()
                options.binary_location = chrome_binary_path
                
                if IS_CONTAINER:
                    # Set options and service for running in a container (e.g., using Chromium)
                    #options.add_argument('--headless') # Required for running in Docker
                    #options.add_argument('--disable-gpu')  # Required for running in Docker
                    options.add_argument('--no-sandbox')  # Required for running in Docker
                    options.add_argument('--disable-dev-shm-usage')  # Required for running in Docker
                
                # Initialize WebDriver with Chrome binary path and options
                self.driver = webdriver.Chrome(options=options, service=service) 
               
        # set Window Size
        self.driver.set_window_size(width=1296, height=736)
        window_size = self.driver.get_window_size()
        width = window_size['width']
        height = window_size['height']

        print("Width:", width)
        print("Height:", height)
      
      
#========================================================================================================================
class Session:
    
    '''
    drivers = []
    first = True
    def switch_window():
        idx = 0
        while True:
            if len(Session.drivers) > 1:
                driver = Session.drivers[idx]
                driver.switch_to.window(driver.window_handles[0])
                time.sleep(6)  # Sleep to allow the window to gain focus
                print(f"Switched to window with title: {driver.title}")
                idx = (idx + 1)%len(Session.drivers)
            elif len(Session.drivers) == 1:
                time.sleep(10)
            else: break
    '''            
    def __init__(self, user_address, psw, browser_name, time_limit=TIME_LIMIT):
        self.user_address = user_address
        self.psw = psw
        self.driver = WebDriver(browser_name).driver
        self.start = time.time()
        self.time_limit = time_limit
        
        '''
        # Launch a thread that ensures rotation between windows for the focus.
        Session.drivers.append(self.driver)
        if Session.first == True:
            Session.first = False
            Session.switch_thread = threading.Thread(target=Session.switch_window)
            Session.switch_thread.start()
        '''
        
        # Prepare log file name and directories : 
        timestamp = str(datetime.today().replace(microsecond=0)).replace(" ","_").replace(":", "-")
        script_dir = os.path.dirname(os.path.abspath(__file__))
        relative_path = LOG_FOLDER + self.user_address + timestamp
        self.log_file_path = os.path.join(script_dir, relative_path)
        # Create the directories if they don't exist
        os.makedirs(os.path.dirname(self.log_file_path), exist_ok=True)

        self.first = True
        self.stats = {"sent_mails" : 0,
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
            try:
                output = func(self, *args, **kwargs)
                if not IS_MEASURED : 
                    # We deactivate this function when measurement are performed since mounted volumes (in containers used by GMT) are read only.
                    # If function didn't raise error we assume everything went fine and log execution timing
                    with open(self.log_file_path + ".log", 'a', newline='', encoding='utf-8') as log:
                        log_writer = csv.writer(log)
                        if self.first:
                            self.first = False
                            log_writer.writerow(["Timestamp", "Event", "Description"])
                        log_writer.writerow([datetime.now(), func.__name__, func.__doc__])
                return output
            except Exception as e:
                print(f"[WARNING] : Function {func.__name__} didn't end. --> NO LOG.")
                raise e
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
    #     Session.drivers.remove(self.driver)
        self.driver.quit()
    
# ================================================================================================================================   

class ProtonSession(Session):

    def __init__(self, user_address, user_psw, browser_name, time_limit=TIME_LIMIT):
        super().__init__(user_address, user_psw, browser_name, time_limit)

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def login(self):
        '''
        Log in to the mail provider website
        '''
        try:
            
            # Open the login page
            self.driver.get("https://account.proton.me/fr/mail")
            self.pause()
        
            # Enter username
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "username")))
            self.driver.find_element(By.ID, "username").click()
            self.driver.find_element(By.ID, "username").send_keys(self.user_address)
            self.pause()
            self.pause()

            # Enter password
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "password")))
            self.driver.find_element(By.ID, "password").click()
            self.driver.find_element(By.ID, "password").send_keys(self.psw)
            self.pause()
        
            # Click on the login button
            self.driver.find_element(By.CSS_SELECTOR, ".button-large").click()
            print("[INFO] : Logged in.")

            # Wait for the page to load
            self.pause(10)
            
            
        except Exception as e:
            raise e
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def logout(self):
        '''
        This function logs out of the proton website
        '''
        
        try:
            # Click on user avatar
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".my-auto > .m-auto")))
            self.driver.find_element(By.CSS_SELECTOR, ".my-auto > .m-auto").click()
            self.pause()
        
            # Click on logout button
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".pb-4 > .button")))
            self.driver.find_element(By.CSS_SELECTOR, ".pb-4 > .button").click()
            self.pause()

            print("[INFO] : Logged out.")
            
        except Exception as e:
            self.home_page(force=True)
            raise e
    

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def send_mail(self, to, mail_object, mail_body):
        '''
        Compose and send an email with specified recipient, subject, and content
        '''
        try:
            # Click to compose a new mail
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/button")))
            self.driver.find_element(By.XPATH, "//div[2]/button").click()
            self.pause()
        
            # Wait for recipient field to be visible and input the recipient
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//div/div/div/div/div/div/input")))
            self.driver.find_element(By.XPATH, "//div/div/div/div/div/div/input").send_keys(to)
            self.driver.find_element(By.XPATH, "//div/div/div/div/div/div/input").send_keys(Keys.ENTER)
            self.pause()
        
            # Wait for subject field to be visible and input the subject
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//input[contains(@id, \'subject-composer\')]")))
            self.driver.find_element(By.XPATH, "//input[contains(@id, \'subject-composer\')]").send_keys(mail_object)
            self.pause()
        
            # Switch to the email content iframe
            self.driver.switch_to.frame(0)
            self.pause()
            
            # Input the email content
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "/html/body/div[1]/div/div[@id=\'rooster-editor\']")))
            element = self.driver.find_element(By.XPATH, "/html/body/div[1]/div/div[@id=\'rooster-editor\']")
            self.driver.execute_script("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = arguments[1]}", element, mail_body)
            self.pause()
        
            # Switch back to default content
            self.driver.switch_to.default_content()
            self.pause()
        
            # Click the send button
            self.driver.find_element(By.XPATH, "//footer/div/div/button/span").click()
            self.pause()
            
            self.stats["sent_mails"] += 1
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
            # Refresh the mailbox
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//span/span/span"))).click()
            print("[INFO] : Refreshed mailbox")
            self.pause()
            
            # Click on the filter button
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//main/div/div/div/div/div/div/div/nav/div[2]/div/button"))).click()
            self.pause()
            
            # Click on the unread filter option
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".dropdown-item:nth-child(4) > .dropdown-item-button"))).click()
            print("[INFO] : Filtered emails, showing unread only.")
            self.pause()
            
        except Exception as e:
            self.home_page(force=True)
            raise e
    
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event  
    def home_page(self, force=False):
        '''
        This function click on the link to home page (i.e.: mailbx)
        '''
        if force:
            self.driver.get("https://account.proton.me/fr/mail")
            self.pause()
            try:
                WebDriverWait(self.driver, 10).until(EC.alert_is_present(),'Timed out waiting for popup to appear.')
                alert = self.driver.switch_to.alert
                alert.accept()
                self.pause()

                self.stats["refresh"] += 1
            except TimeoutException:
                temp = "no alert"
        else:
            # Click on "mailbox"
            try:
                WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//span/span/span")))
                self.driver.find_element(By.XPATH, "//span/span/span").click()
                self.pause()

                self.stats["refresh"] += 1
            except Exception as e:
                print("[DEBUG] : Couldn't click on mailbox link. Trying to force refreshing to homepage")
                try:
                    self.home_page(force=True)

                    self.stats["refresh"] += 1
                except Exception as e:
                    print("[ERROR] : Unable to load home page. Program will exit")
                    #sys.exit(1)
        
        
    
    def delete_drafts(self):
        '''
        Not implemented in this class becauses presence of drafts causes no trouble.
        Just defined for common interface with OutlookSession.
        '''
        self.pause()
        self.pause()
        self.pause()
        self.pause()
        self.pause()
        pass
    
    @Session.time_limited_execution
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_sender_address(self):
        '''
        Retrieve the sender's address of an opened mail
        '''
        try:
            # Get the sender's address
            sender = self.driver.find_element(By.XPATH, "//span[@data-testid='recipients:sender']").get_attribute("title") # <sender@domain>
            print("[INFO] : Sender's address= {}.".format(sender))
            self.pause()
            return sender
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            self.read_first()
            raise e
        
    @Session.time_limited_execution
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_subject(self):
        '''
        Retrieve the subject of an opened email
        '''
        try:
            # Get the sender's address from the span included in the banner
            subject = self.driver.find_element(By.XPATH, "//section/div/div[3]/div/header/div/h1/span").text
            print("[INFO] : Found subject = {}".format(subject))
            self.pause()
            return subject
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
        Opens the first email in the list
        '''
        try:
            # Click on the email
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".item-container-wrapper:nth-child(1) .item-senders .inline-block > span")))
            self.driver.find_element(By.CSS_SELECTOR, ".item-container-wrapper:nth-child(1) .item-senders .inline-block > span").click()
            print("[INFO] : Read first email.")
            self.stats["read_mails"] += 1
            self.pause(15)
           
        except Exception as e:
            self.home_page(force=True)
            self.filer()
            raise e
        
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event  
    def delete_first(self):
        '''
        Delete the first email in the list
        '''
        try:
           
            # Delete it
            element = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".flex-1 > div > .toolbar .flex:nth-child(4)")))
            element.click()
            self.stats["deleted_mails"] += 1
            print("[INFO] : Deleted the email.")
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
        Replies to an opened email
        '''
        try:
            # Click on Reply
                WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".button-for-icon:nth-child(1) > .rtl\\3Amirror")))
                self.driver.find_element(By.CSS_SELECTOR, ".button-for-icon:nth-child(1) > .rtl\\3Amirror").click()
                print("[DEBUG] : Clicked on Reply")
                self.pause()

                # Switch to the email content frame
                self.driver.switch_to.frame(1)
                WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.ID, "rooster-editor")))
                element = self.driver.find_element(By.ID, "rooster-editor")
                print("[DEBUG] : Switched to email content frame")
                self.pause()
                
                # Set the email response
                self.driver.execute_script("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = arguments[1]}", element, answer)
                print("[DEBUG] : Set email response")
                self.pause()
                

                # Click the send button
                self.driver.switch_to.default_content()
                WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//footer/div/div/button/span")))
                self.driver.find_element(By.XPATH, "//footer/div/div/button/span").click()
                print("[DEBUG] : Clicked the send button")
                
                self.stats["answered_mails"] += 1
                print("[INFO] : Answer Sent.")
                self.pause()
                self.pause()
                
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            self.read_first()
            raise e
    
# ===================================================================================================================================
# ===================================================================================================================================


class OutlookSession(Session):
    

    def __init__(self, user_address, user_psw,  browser_name, time_limit=TIME_LIMIT):
        super().__init__(user_address, user_psw, browser_name, time_limit)
    
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def login(self):
        '''
        Log in to the Outlook user account
        '''
        try:
            # Open the Outlook login page
            self.driver.get("https://outlook.office.com/mail/")
            self.pause()
            
            # Enter user email
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.ID, "i0116")))
            self.driver.find_element(By.ID, "i0116").send_keys(self.user_address)
            self.pause()

            # Click on the next button
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "idSIButton9")))
            self.driver.find_element(By.ID, "idSIButton9").click()
            self.pause()

            # Enter user password
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "i0118")))
            self.driver.find_element(By.ID, "i0118").click()
            self.driver.find_element(By.ID, "i0118").send_keys(self.psw)
            self.driver.find_element(By.ID, "i0118").send_keys(Keys.ENTER)
            self.pause()

            # Click on the decline button
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "declineButton")))
            self.driver.find_element(By.ID, "declineButton").click()

            print("[INFO] : Logged in.")

            # Wait for the page to load
            self.pause(10)
            
        except Exception as e:
            self.home_page(force=True)
            raise e
            
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def logout(self):
        '''
        Logout of the connected account
        '''
        try:
            # Click on the user logo
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".\\_8ZYZKvxC8bvw1xgQGSkvvA\\=\\= > img")))
            self.driver.find_element(By.CSS_SELECTOR, ".\\_8ZYZKvxC8bvw1xgQGSkvvA\\=\\= > img").click()
            self.pause()

            # Click on the logout link
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "mectrl_body_signOut")))
            self.driver.find_element(By.ID, "mectrl_body_signOut").click()
            self.pause()

            print("[INFO] : Logged out.")
        
        except Exception as e:
            self.home_page(force=True)
            raise e
        
   
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event      
    def send_mail(self, to, subject, content):
        '''
        Send a mail to the specified recipient with the given subject and content
        '''
        try:
            # Click to start composing an email
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//span/button/span/span/span")))
            self.driver.find_element(By.XPATH, "//span/button/span/span/span").click()
            self.pause()
        
            # Input the recipient address
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, ".\\___1mtnehv")))
            recipient_field = self.driver.find_element(By.CSS_SELECTOR, ".\\___1mtnehv")
            self.driver.execute_script("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '" + to + "'}", recipient_field)
            self.pause()
        
            # Type the subject
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/div[2]/div/div/div/input")))
            self.driver.find_element(By.XPATH, "//div[2]/div[2]/div/div/div/input").send_keys(subject)
            self.pause()
        
            # Input the mail body
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//div[3]/div/div/div/div/div[4]/div/div/div")))
            mail_body_element = self.driver.find_element(By.XPATH, "//div[3]/div/div/div/div/div[4]/div/div/div")
            self.driver.execute_script("arguments[0].innerText = arguments[1]", mail_body_element, content)
            self.pause()
        
            # Click the send button
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".ms-Button--primary")))
            self.driver.find_element(By.CSS_SELECTOR, ".ms-Button--primary").click()
            self.pause()
            self.pause()
            self.pause()

            self.stats["sent_mails"] += 1
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
            # Click on the filter button
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".\\___1j0t24r")))
            self.driver.find_element(By.CSS_SELECTOR, ".\\___1j0t24r").click()
            self.pause()
        
            # Click on the "Unread" option
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".fui-MenuItem:nth-child(3) .UagSo")))
            self.driver.find_element(By.CSS_SELECTOR, ".fui-MenuItem:nth-child(3) .UagSo").click()
            print("[INFO] : Filtered emails, showing unread only.")
            self.pause()
            self.pause()
        
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
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//a[@id='O365_AppName']/span"))).click()
            self.pause()
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
                WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/div/div/div/span"))).click()
                self.pause()
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
        This function remove drafts as it perturbs the answering email function
        '''
        try:
            # Check if there are drafts
            n_drafts = self.driver.find_element(By.XPATH, "//*[@id=\"folderPaneDroppableContainer\"]/div/div[3]/div/div/div[3]/div/span[2]/span/span[1]").text
            n_drafts = int(n_drafts)
            print(f"[INFO] : There is(are) : {n_drafts} draft(s).")

        except Exception as e:
            print(f"[INFO] : There is no drafts")
            return
        try:
            # Click on folder Drafts
            self.pause()
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[3]/div/div/div[2]/div/span")))
            self.driver.find_element(By.XPATH, "//div[3]/div/div/div[3]/div/span").click()
            print(f"[DEBUG] : Clicked on folder Draft")
            self.pause()

            # Click on Empty Folder
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "(//button[@type='button'])[24]")))
            self.driver.find_element(By.XPATH, "(//button[@type='button'])[24]").click()
            print(f"[DEBUG] : Clicked on empty folder")
            self.pause()

            # Click on Confirm
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/div/span/button/span/span/span")))
            self.driver.find_element(By.XPATH, "//div[2]/div/span/button/span/span/span").click()
            print(f"[DEBUG] : Clicked on Confirmed")
            self.pause()

            # Come back to home page (So that it takes effect)
            self.home_page(force=True)
            print("[INFO] : Drafts deleted.")
            self.pause()
            
        except Exception as e:
            self.home_page(force=True)
            raise e
    
    @Session.time_limited_execution
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_sender_address(self):
        '''
        Retrieves the sender's address of the first mail
        '''
        try:
            # Get the sender address
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//div[2]/div[2]/div/div/span")))
            sender = self.driver.find_element(By.XPATH, "//div[2]/div[2]/div/div/span").get_attribute("title")
            print("[DEBUG] : Looked in the First Span for the sendor address")
            self.pause()

            # If the sender is not found in the first span, check the second span (this is because "brouillon" tag appears)
            if sender is None or sender == "":
                print("[DEBUG] : Look in the second Span (Likely because of Brouillon)")
                sender = self.driver.find_element(By.XPATH, "//div[2]/div/div/div/div/div[2]/div[2]/div/div/span[2]").get_attribute("title")
                print("[DEBUG] : Found in second Span")
                self.pause()
                

            print("[INFO] : Sender = {}.".format(sender))
            return sender
        
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            self.read_first()
            raise e
        
    @Session.time_limited_execution
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_subject(self):
        '''
        Returns the subject of an opened mail
        '''
        try:
            element = WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//*[@id='ConversationReadingPaneContainer']/div/div/div[1]/div/div/div/div/div/div/div/div/span[1]")))
            print(f"[INFO] : Founded the email subject : {element.text}.")
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
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div/div[2]/div/div/div[@draggable='true']/div/div[2]/div[2]/div/div/span")))
            self.driver.find_element(By.XPATH, "//div/div[2]/div/div/div[@draggable='true']/div/div[2]/div[2]/div/div/span").click()
            self.stats["read_mails"] += 1
            print("[INFO] : Read first email.")
            self.pause(15)
        
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            raise e    
    
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def delete_first(self):
        '''
        delete the first mail in the list
        '''
        try:
            # Put mouse on banner to make delete icon appear
            element = self.driver.find_element(By.XPATH, "//div/div/div/div/div/div[2]/div/div/div[@draggable='true']")
            actions = ActionChains(self.driver)
            actions.move_to_element(element).perform()
            print("[DEBUG] : Moved Mouse on First Mail")
            self.pause()

            # Click on delete icon
            self.driver.find_element(By.XPATH, "//div/div/div/div/div/div[2]/div/div/div/div/div[3]/div").click()
            self.stats["deleted_mails"] += 1
            print("[INFO] : Deleted the first email.")
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
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".Yk9K4 .Q0K3G")))
            self.driver.find_element(By.CSS_SELECTOR, ".Yk9K4 .Q0K3G").click()
            print("[DEBUG] : Clicked on reply")
            self.pause()

            # Write answer in the editor
            WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//div[2]/div/div/div[4]/div/div/div")))
            element = self.driver.find_element(By.XPATH, "//div[2]/div/div/div[4]/div/div/div")
            self.driver.execute_script("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = arguments[1]}", element, answer)
            print("[DEBUG] : Edited Editor Content")
            self.pause()
                
            # Click the send button
            self.driver.find_element(By.CSS_SELECTOR, ".ms-Button--primary").click()
            print("[DEBUG] : Clicked the send button")
            self.pause()

            # Mark as read
            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[2]/div/div/div[3]/div/button/span/i/span/i")))
            self.driver.find_element(By.XPATH, "//div[2]/div/div/div[3]/div/button/span/i/span/i").click()
            print("[DEBUG] : Clicked the ... button")
            self.pause()

            WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//li[6]/button/div/span")))
            self.driver.find_element(By.XPATH, "//li[6]/button/div/span").click()
            print("[DEBUG] : Clicked the mark_as_read button")
            
            self.stats["answered_mails"] += 1
            print("[INFO] : Response sent.")
            self.pause()
            
            
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            self.read_first()
            raise e    
    
#========================================================================================================================