# Local imports

from sessions import Session, WebDriver
from constants import *

# Third parties imports

from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains

# ==============================================================================================================
# =============== Outlook Session ==============================================================================
# ==============================================================================================================

# Constants for URLs
OUTLOOK_URL = "https://go.microsoft.com/fwlink/p/?LinkID=2125442&deeplink=owa%2F"
LOGGED_IN_URL = "https://outlook.live.com/mail/0/"
HOME_PAGE_URL = "https://outlook.live.com/mail/"
LOGGED_OUT_URL = "https://www.msn.com/fr-be?ocid=mailsignout&pc=U591"

# Constants for selectors
USERNAME_INPUT = (By.ID, "i0116")
PASSWORD_INPUT = (By.ID, "i0118")
NEXT_BUTTON = (By.ID, "idSIButton9")
DECLINE_BUTTON = (By.ID, "declineButton")

USER_AVATAR = (By.CSS_SELECTOR, ".\\_8ZYZKvxC8bvw1xgQGSkvvA\\=\\= > img")
LOGOUT_BUTTON = (By.ID, "mectrl_body_signOut")

COMPOSE_BUTTON = (By.XPATH, "//span/button/span/span/span")
RECIPIENT_FIELD = (By.CSS_SELECTOR, ".\\___1mtnehv")
SUBJECT_FIELD = (By.XPATH, "//div/div[3]/div[2]/span/input")
EMAIL_BODY = (By.XPATH, '//*[@id="editorParent_1"]/div')
ATTACH_FILE_INPUT = (By.XPATH, "//input[@data-testid='local-computer-filein'][2]")
SEND_A_COPY_BUTTON = (By.XPATH, "//div[5]/button/div/i")
SEND_BUTTON = (By.XPATH, "//button[@title='Send (Ctrl+Enter)']")

FILTER_BUTTON = (By.XPATH, "//button[@id='mailListFilterMenu']/span/i")
UNREAD_FILTER_OPTION = (By.CSS_SELECTOR, ".fui-MenuItem:nth-child(3) .UagSo")
HOME_PAGE_LINK = (By.XPATH, "//div[2]/div/div/div/span")

DRAFT_COUNT = (By.XPATH, "//div[3]/div/span[2]/span/span[1]")
DRAFTS_FOLDER = (By.XPATH, "//div[2]/div/div/div[3]/div/span[1]")
EMPTY_FOLDER_BUTTON = (By.XPATH, "(//button[@type='button'])[24]")
CONFIRM_EMPTY_FOLDER = (By.XPATH, "//div[3]/button[1]")

FIRST_SENDER_SPAN = (By.XPATH, "//div[2]/div[2]/div/div/span")
SECOND_SENDER_SPAN = (By.XPATH, "//div[2]/div/div/div/div/div[2]/div[2]/div/div/span[2]")

FIRST_EMAIL_ITEM = (By.XPATH, "//div[3]/div/div/div/div/div/div/div/div[2]/div/div/div/div/div/div/div[2]")

EMAIL_SUBJECT = (By.XPATH, "//*[@id='ConversationReadingPaneContainer']/div/div/div[1]/div/div/div/div/div/div/div/div/span[1]")

FIRST_EMAIL_ITEM = (By.XPATH, "//div[3]/div/div/div/div/div/div/div/div[2]/div/div/div/div/div/div/div[2]")

DELETE_BANNER = (By.XPATH, "//div/div[3]/div/div/div[1]/div[3]/div/div/div/div/div/div/div/div[2]/div/div/div")
DELETE_ICON = (By.XPATH, "//div/div/div[1]/div[3]/div/div/div/div/div/div/div/div[2]/div/div/div/div/div/div/div[3]/div")

REPLY_BUTTON = (By.CSS_SELECTOR, ".Yk9K4 .Q0K3G")
EDITOR_INPUT = (By.XPATH, "//*[@id='editorParent_1']/div")
SEND_BUTTON = (By.XPATH, "//button[@title='Send (Ctrl+Enter)']")
MORE_OPTIONS_BUTTON = (By.XPATH, "//div[2]/div/div/div[3]/div/button/span/i/span/i")
MARK_AS_READ_BUTTON = (By.XPATH, "//li[6]/button/div/span")

class OutlookSession(Session):

    def __init__(self, user_address, user_psw, browser_name, adblock, untracked, time_limit=TIME_LIMIT):
        super().__init__(user_address, user_psw, browser_name, adblock, untracked, time_limit)

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def login(self):
        '''
        Log in to the Outlook user account.
        '''
        try:

            # Open the Outlook login page
            self.driver.get(OUTLOOK_URL)
            # Enter user email
            self.type(USERNAME_INPUT, self.user_address)
            # Click on the next button
            self.click(NEXT_BUTTON)
            # Enter user password
            self.type(PASSWORD_INPUT, self.psw)
            self.click(NEXT_BUTTON)
            # Click on the decline button
            self.click(DECLINE_BUTTON)
            # Wait for the page to load
            self.wait_page_loaded(LOGGED_IN_URL)
            print("[INFO] : Logged in.")

        except Exception as e:
            self.home_page(force=True)
            raise e
    
    

    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def logout(self):
        '''
        Log out of the connected account.
        '''
        try:
            # Click on the user logo
            self.click(USER_AVATAR)
            # Click on the logout link
            self.click(LOGOUT_BUTTON)
            # Wait until disconnected
            self.wait_page_loaded(LOGGED_OUT_URL)
            self.wait_for_visual_readiness()
            print("[INFO] : Logged out.")
        except Exception as e:
            self.home_page(force=True)
            raise e
        


    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def send_mail(self, to, subject, content, attached_file_size=0):
        '''
        Compose and send an email with a specified recipient, subject, and content.
        '''
        try:
            # Click to start composing an email
            self.click(COMPOSE_BUTTON)
            # Input the recipient address
            self.type(RECIPIENT_FIELD, to, hit_enter=True)
            # Type the subject
            self.type(SUBJECT_FIELD, subject)
            # Input the mail body
            self.type(EMAIL_BODY, content)
            # Attach a file
            if attached_file_size:
                script_dir = os.path.dirname(os.path.abspath(__file__))
                relative_path = ATTACHED_FILES + f"{attached_file_size}MiB.txt"
                attached_file_path = os.path.normpath(os.path.join(script_dir, relative_path))
                self.file_input(ATTACH_FILE_INPUT, attached_file_path)
                try : 
                    # Click on send a copy
                    self.click(SEND_A_COPY_BUTTON)            
                except Exception:
                    tmp = 'No confirmation needed'
                self.pause(TIME_PER_MB * attached_file_size)
            # Click the send button
            self.click(SEND_BUTTON)
            self.stats["sent_mails"][attached_file_size] += 1
            print("[INFO] : Mail Sent.")

        except Exception as e:
            self.home_page(force=True)
            raise e
        


    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def filter(self):
        '''Show only unread emails.'''
        try:
            # Click on the filter button
            self.click(FILTER_BUTTON)
            # Click on the "Unread" option
            self.click(UNREAD_FILTER_OPTION)
            print("[INFO] : Filtered emails, showing unread only.")
        except Exception as e:
            self.home_page(force=True)
            raise e
        


    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def home_page(self, force=False):
        '''
        Navigate to the homepage (mailbox).
        '''
        if force:
            self.driver.get(HOME_PAGE_URL)
        # Accept alert if any
            try:
                WebDriverWait(self.driver, WAIT_LIMIT).until(EC.alert_is_present())
                self.driver.switch_to.alert.accept()
                self.stats["refresh"] += 1
            except TimeoutException:
                print("[DEBUG] : No alert found.")
            print("[DEBUG] : Forced Refresh")
        else:
            try:
                self.click(HOME_PAGE_LINK)
                self.stats["refresh"] += 1
            except Exception:
                print("[DEBUG] : Failed to click mailbox link. Trying force refresh.")
                self.home_page(force=True)



    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def delete_drafts(self):
        '''
        Removes all draft emails, as they may interfere with certain email operations.
        '''
        try:
            # Check if there are drafts
            n_drafts = WebDriverWait(self.driver, WAIT_LIMIT).until(
                EC.visibility_of_element_located(DRAFT_COUNT)
            ).text
            n_drafts = int(n_drafts)
            print(f"[INFO] : There are {n_drafts} draft(s).")
        except TimeoutException:
            print("[INFO] : No drafts found.")
            return

        try:
            # Navigate to the Drafts folder
            self.click(DRAFTS_FOLDER)
            print("[DEBUG] : Navigated to Drafts folder.")

            # Click on 'Empty Folder' button
            self.click(EMPTY_FOLDER_BUTTON)
            print("[DEBUG] : Clicked on 'Empty Folder' button.")
            # self.pause(1000)
            # Confirm the deletion of drafts
            self.click(CONFIRM_EMPTY_FOLDER)
            print("[DEBUG] : Confirmed deletion of drafts.")
            self.pause(1)

            # Return to the home page
            self.home_page(force=True)
            print("[INFO] : Drafts deleted successfully.")
        except Exception as e:
            self.home_page(force=True)
            raise e



    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_sender_address(self):
        '''
        Retrieve sender's address from the first email in the inbox.
        '''
        try:
            # Attempt to locate the sender's address in the primary span
            sender = WebDriverWait(self.driver, 10).until(
                EC.visibility_of_element_located(FIRST_SENDER_SPAN)
            ).get_attribute("title")
            print("[DEBUG] : Checked first span for sender address.")

            # If the sender is not found, check the secondary span
            if not sender:
                print("[DEBUG] : Checking the second span (possibly due to draft tag).")
                sender = self.driver.find_element(*SECOND_SENDER_SPAN).get_attribute("title")
                print("[DEBUG] : Found sender in the second span.")

            print(f"[INFO] : Sender = {sender}.")
            return sender
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            raise e



    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_subject(self):
        '''
        Retrieve the subject of the currently opened email.
        '''
        try:
            # Locate the subject element
            subject_element = WebDriverWait(self.driver, 10).until(
                EC.visibility_of_element_located(EMAIL_SUBJECT)
            )
            print(f"[INFO] : Found the email subject: {subject_element.text}.")
            return subject_element.text
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
        Open the first email in the inbox.
        '''
        try:
            # Locate and click the first email in the list
            self.click(FIRST_EMAIL_ITEM)
            self.stats["read_mails"] += 1
            print("[INFO] : Opened the first email.")
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
            element = self.driver.find_element(*DELETE_BANNER)
            actions = ActionChains(self.driver)
            actions.move_to_element(element).perform()
            print("[DEBUG] : Moved Mouse on First Mail")
            self.pause()

            # Click on delete icon
            self.click(DELETE_ICON)
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
        Answer an opened email
        '''
        try:
            # Click on reply
            self.click(REPLY_BUTTON)
            print("[DEBUG] : Clicked on reply")

            # Write answer in the editor
            self.type(EDITOR_INPUT, answer)
            print("[DEBUG] : Edited Editor Content")

            # Click the send button
            self.click(SEND_BUTTON)
            print("[DEBUG] : Clicked the send button")

            # Mark as read
            self.click(MORE_OPTIONS_BUTTON)
            print("[DEBUG] : Clicked the ... button")

            self.click(MARK_AS_READ_BUTTON)
            print("[DEBUG] : Clicked the mark_as_read button")

            self.stats["answered_mails"] += 1
            print("[INFO] : Response sent.")
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            self.read_first()
            raise e
