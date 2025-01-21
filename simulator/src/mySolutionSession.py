# Local imports

from sessions import *


# =====================================================================================
# =============== My Solution Session ======================================================
# =====================================================================================

# Constants for URLs
MY_SOLUTION_URL = "https://my_solution/"
HOME_PAGE_URL = "https://my_solution/?_task=mail"
LOGGED_IN_URL = "https://my_solution/?_task=mail&_mbox=INBOX"
LOGGED_OUT_URL = "https://my_solution/?_task=logout&_token=XXQAOUkQpEaCtGgjU9O8LRCqjDVD6ABy"

# Constants for selectors
USERNAME_INPUT = (By.ID, "rcmloginuser")
PASSWORD_INPUT = (By.ID, "rcmloginpwd")
LOGIN_BUTTON = (By.ID, "rcmloginsubmit")
LOGOUT_BUTTON = (By.XPATH, "//*[@id='rcmbtn109']")
COMPOSE_BUTTON = (By.ID, "rcmbtn103")
RECIPIENT_FIELD = (By.XPATH, "//*[@id='compose_to']/div/div/ul/li/input")
SUBJECT_FIELD = (By.XPATH, "//*[@id='compose-subject']")
EMAIL_BODY_IFRAME = (By.XPATH, "//*[@id='composebody']")
ATTACH_FILE_INPUT = (By.XPATH, "//input[@id='uploadformInput']")
SEND_BUTTON = (By.XPATH, "//button[@value='Envoyer']")
REFRESH_BUTTON = (By.XPATH, "//*[@id='rcmbtn111']")
UNREAD_FILTER_OPTION = (By.XPATH, "//*[@id='layout-list']/div[2]/a[2]")
HOME_PAGE_LINK = (By.XPATH, "//*[@id='rcmbtn104']")
FIRST_EMAIL_SUBJECT = (By.XPATH, "//tr/td[2]/span[4]/a/span")
FIRST_EMAIL_ITEM = (By.XPATH, "//tr/td[2]/span[1]/span/span")
DELETE_EMAIL_BUTTON = (By.XPATH, "//*[@id='rcmbtn123']")
REPLY_BUTTON = (By.XPATH, "//*[@id='toolbar-menu']/li[2]")
EMAIL_REPLY_EDITOR = (By.XPATH, "//*[@id='composebody']")
SEND_BUTTON_REPLY = (By.XPATH, "//button[@value='Envoyer']")


class MySolutionSession(Session):

    def __init__(self, user_address, user_psw, browser_name, adblock, untracked, time_limit=TIME_LIMIT, no_time_limit=False):
        super().__init__(user_address, user_psw, browser_name, adblock, untracked, time_limit, no_time_limit)

    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True))
    @Session.log_event
    def login(self):
        '''
        Log in to the mail provider website
        '''
        # Open the login page
        self.driver.get(MY_SOLUTION_URL)
        # Enter username
        self.type(USERNAME_INPUT, self.user_address)
        # Enter password
        self.type(PASSWORD_INPUT, self.psw)
        # Click on the login button
        self.click(LOGIN_BUTTON)
        # Wait for the page to load
        self.wait_page_loaded(LOGGED_IN_URL)
        print("[INFO] : Logged in")

    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True))
    @Session.log_event
    def logout(self):
        '''
        This function logs out of the proton website
        '''
        # Click on logout button
        self.click(LOGOUT_BUTTON)
        # Wait for the page to load
        self.wait_page_loaded()
        print("[INFO] : Logged out")
        

    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True))
    @Session.log_event
    def send_mail(self, to, mail_object, mail_body, attached_file_size=0):
        '''
        Compose and send an email with a specified recipient, subject, and content.
        '''

        # Click on the compose button
        self.click(COMPOSE_BUTTON)
        # Enter the recipient
        self.type(RECIPIENT_FIELD, to, hit_enter=True)
        # Enter the subject of the email
        self.type(SUBJECT_FIELD, mail_object)
        # Enter the content of the email
        self.type(EMAIL_BODY_IFRAME, mail_body)

        # Attach a file if necessary
        if attached_file_size:
            script_dir = os.path.dirname(os.path.abspath(__file__))
            relative_path = ATTACHED_FILES + f"{attached_file_size}MiB.txt"
            attached_file_path = os.path.normpath(os.path.join(script_dir, relative_path))
            self.file_input(ATTACH_FILE_INPUT, attached_file_path)
            # Wait for file to download
            self.pause(TIME_PER_MB * attached_file_size)
        
        # Click on the send button
        self.click(SEND_BUTTON)
        
        self.stats["sent_mails"][attached_file_size] += 1
        print("[INFO] : Sent mail.")



    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True))
    @Session.log_event
    def filter(self):
        '''
        Display only unread emails.
        '''

        # Refresh the inbox
        self.click(REFRESH_BUTTON)
        # Select the "unread" option
        self.click(UNREAD_FILTER_OPTION)
        print("[INFO] : Emails filtered. Showing unread emails only.")


    
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def home_page(self, force=False):
        '''
        Navigates to the home page (mailbox).
        '''
        if force:
            self.driver.get(HOME_PAGE_URL)
            try:
                alert = self.switch_frame(alert=True)
                alert.accept()
                self.stats["refresh"] += 1
            except TimeoutException:
                print("[DEBUG] : No alert found.")
        else:
            try:
                self.click(HOME_PAGE_LINK)
                self.stats["refresh"] += 1
            except Exception as e:
                print(f"[DEBUG] : Failed to click mailbox link ({e}). Trying force refresh.")
                self.home_page(force=True)
        self.pause(delay=1)
            

    def delete_drafts(self):
        '''
        Not implemented in this class because presence of drafts causes no trouble.
        Just defined for common interface with OutlookSession and GmailSession etc...
        '''
        pass


    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True),
                              lambda self : self.filter())
    def get_sender_address(self):
        '''
        Retrieves the sender's email address from the first email in the list.
        '''
        sender = self.find(FIRST_EMAIL_ITEM).get_attribute("title")
        print(f"[INFO] : Sender's address= {sender}.")
        return sender
    



    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True),
                              lambda self : self.filter(),
                              lambda self : self.read_first())
    def get_subject(self):
        '''
        Retrieves the subject of the currently opened email.
        '''
        subject = self.find(FIRST_EMAIL_SUBJECT).text
        print(f"[INFO] : Found subject = {subject}")
        return subject



    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True),
                              lambda self : self.filter())
    @Session.log_event
    def read_first(self):
        '''
        Opens the first email in the list.
        '''
        self.click(FIRST_EMAIL_ITEM)
        self.pause(READING_TIME)
        print("[INFO] : Read first email.")
        self.stats["read_mails"] += 1
        



    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True),
                              lambda self : self.filter(),
                              lambda self : self.read_first())
    @Session.log_event
    def delete_first(self):
        '''
        Deletes the first email in the list.
        '''
        self.click(DELETE_EMAIL_BUTTON)
        print("[INFO] : Deleted the email.")
        self.stats["deleted_mails"] += 1



    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True),
                              lambda self : self.filter(),
                              lambda self : self.read_first())
    @Session.log_event
    def reply(self, answer):
        '''
        Replies to an opened email.
        '''
        self.click(REPLY_BUTTON)
        # Type answer
        self.click(EMAIL_REPLY_EDITOR)
        self.type(EMAIL_REPLY_EDITOR, answer)
        # Send the reply
        self.click(SEND_BUTTON_REPLY)
        
        self.stats["answered_mails"] += 1
        print("[INFO] : Reply sent.")