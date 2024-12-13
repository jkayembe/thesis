# Local imports

from sessions import *


# =====================================================================================
# =============== Proton Session ======================================================
# =====================================================================================

# Constants for URLs
PROTON_URL = "https://account.proton.me/fr/mail"
HOME_PAGE_URL = "https://account.proton.me/fr/mail"
LOGGED_IN_URL = "https://mail.proton.me/u/0/inbox"
LOGGED_OUT_URL = "https://account.proton.me/mail"

# Constants for selectors
USERNAME_INPUT = (By.ID, "username")
PASSWORD_INPUT = (By.ID, "password")
LOGIN_BUTTON = (By.CSS_SELECTOR, ".button-large")
USER_AVATAR = (By.CSS_SELECTOR, ".my-auto > .m-auto")
LOGOUT_BUTTON = (By.CSS_SELECTOR, ".pb-4 > .button")
COMPOSE_BUTTON = (By.XPATH, "//div[3]/div/div/div/div[1]/div[2]/button")
RECIPIENT_FIELD = (By.XPATH, "//input[contains(@id,'to-composer')]")
SUBJECT_FIELD = (By.XPATH, "//input[contains(@id, 'subject-composer')]")
EMAIL_BODY_IFRAME = (By.XPATH, "/html/body/div[1]/div/div[@id='rooster-editor']")
ATTACH_FILE_INPUT = (By.XPATH, "//div[2]/div/div/label/input")
SEND_BUTTON = (By.XPATH, "//footer/div/div/button/span")
REFRESH_BUTTON = (By.XPATH, "//span/span/span")
FILTER_BUTTON = (By.XPATH, "//main/div/div/div/div/div/div/div/nav/div[2]/div/button")
UNREAD_FILTER_OPTION = (By.CSS_SELECTOR, ".dropdown-item:nth-child(4) > .dropdown-item-button")
HOME_PAGE_LINK = (By.XPATH, "//span/span/span")
FIRST_EMAIL_SUBJECT = (By.XPATH, "//section/div/div[3]/div/header/div/h1/span")
FIRST_EMAIL_ITEM = (By.XPATH, "//div/div[1]/div/div/div/div[2]/span[2]/span[contains(@data-testid,'message-column:sender-address')]")
DELETE_EMAIL_BUTTON = (By.CSS_SELECTOR, ".flex-1 > div > .toolbar .flex:nth-child(4)")
REPLY_BUTTON = (By.CSS_SELECTOR, ".button-for-icon:nth-child(1) > .rtl\\3Amirror")
EMAIL_REPLY_EDITOR = (By.ID, "rooster-editor")
SEND_BUTTON_REPLY = (By.XPATH, "//footer/div/div/button/span")


class ProtonSession(Session):

    def __init__(self, user_address, user_psw, browser_name, adblock, untracked, time_limit=TIME_LIMIT):
        super().__init__(user_address, user_psw, browser_name, adblock, untracked, time_limit)

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
        self.driver.get(PROTON_URL)
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
        # Click on user avatar
        self.click(USER_AVATAR)
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
        # Switch context to the email content iframe
        self.switch_frame(frame_number=0)
        # Enter the content of the email
        self.type(EMAIL_BODY_IFRAME, mail_body)
        # Return to the default context
        self.switch_frame()

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
        # Click on the filter button
        self.click(FILTER_BUTTON)
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
                print("[DEBUG] : Failed to click mailbox link. Trying force refresh.")
                self.home_page(force=True)

    def delete_drafts(self):
        '''
        Not implemented in this class because presence of drafts causes no trouble.
        Just defined for common interface with OutlookSession and GmailSession.
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
        # Switch to the reply iframe
        self.switch_frame(frame_number=1)
        # Type answer
        self.type(EMAIL_REPLY_EDITOR, answer)
        # Switch back to main iframe
        self.switch_frame()
        # Send the reply
        self.click(SEND_BUTTON_REPLY)
        
        self.stats["answered_mails"] += 1
        print("[INFO] : Reply sent.")