# Local imports

from sessions import *

# Constants for URLs
#GMAIL_URL = "https://mail.google.com/"
GMAIL_URL = "https://accounts.google.com/v3/signin/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&ddm=1"
LOGGED_IN_URL = "https://mail.google.com/mail/u/0/#inbox"
HOME_PAGE_URL = "https://mail.google.com/mail/u/0/#inbox"

# Constants for selectors
USERNAME_INPUT = (By.ID, "identifierId")
PASSWORD_INPUT = (By.NAME, "Passwd")
NEXT_BUTTON = (By.CSS_SELECTOR, ".VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-vQzf8d")
LOGOUT_AVATAR = (By.XPATH, "//header/div[2]/div[3]/div[1]/div[2]/div/a")
ACCOUNT_FRAME = "account"
LOGOUT_BUTTON = (By.XPATH, "//div[contains(text(),'Sign out')]")

COMPOSE_BUTTON = (By.CSS_SELECTOR, ".T-I-KE")
RECIPIENT_FIELD = (By.XPATH, "//div/div/input")
SUBJECT_FIELD = (By.XPATH, "//div[3]/input")
EMAIL_BODY = (By.XPATH, "//td[2]/div[2]/div/div")
ATTACH_FILE_INPUT = (By.NAME, "Filedata")
SEND_BUTTON = (By.XPATH, "//div[4]/table/tbody/tr/td/div/div[2]/div")

SEARCH_BAR = (By.NAME, "q")
INBOX_LINK = (By.XPATH, "//div[2]/div/div/div/div/div/div/div/div/div[2]")
BODY_ELEMENT = (By.CSS_SELECTOR, "body")


DRAFTS_COUNT = (By.XPATH, "//div[@data-tootip='Drafts']/div/div[2]/div")
DRAFTS_FOLDER = (By.XPATH, "//div[5]/div/div/div")
SELECT_ALL_DRAFTS = (By.XPATH, "//div[2]/div[2]/div/div/div/div/div/div/span")
DELETE_BUTTON = (By.XPATH, "//div[2]/div/div/div/div[2]/div/div")

FIRST_SENDER_SPAN = (By.XPATH, "//div[6]/div/div/table/tbody/tr/td[5]/div[2]/span/span")
SECOND_SENDER_SPAN = (By.XPATH, "//div[6]/div/div/table/tbody/tr/td[5]/div[2]/span/span[3]")

EMAIL_SUBJECT = (By.XPATH, "//div[2]/div/div/div[2]/div/h2")

FIRST_EMAIL_ITEM = (By.XPATH, "//div[6]/div/div/table/tbody/tr")

DELETE_ICON = (By.XPATH, "//div[2]/div/div/div[2]/div[3]/div")

REPLY_BUTTON = (By.XPATH, "//div[2]/div/div/div/table/tbody/tr/td[2]/div/div/span")
EDITOR_INPUT = (By.XPATH, "//div[3]/div/table/tbody/tr/td[2]/div[2]/div/div")
SEND_BUTTON = (By.XPATH, "//div[4]/table/tbody/tr/td/div/div[2]/div")


class GmailSession(Session):

    def __init__(self, user_address, user_psw, browser_name, adblock, untracked, time_limit=TIME_LIMIT, no_time_limit=False):
        super().__init__(user_address, user_psw, browser_name, adblock, untracked, time_limit, no_time_limit)

    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True))
    @Session.log_event
    def login(self):
        self.driver.get(GMAIL_URL)
        self.type(USERNAME_INPUT, self.user_address)
        self.click(NEXT_BUTTON)
        self.type(PASSWORD_INPUT, self.psw)
        self.click(NEXT_BUTTON)
        self.wait_page_loaded(LOGGED_IN_URL)
        print("[INFO] : Logged in.")


    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True))
    @Session.log_event
    def logout(self):
        self.click(LOGOUT_AVATAR)
        self.switch_frame(frame_name = ACCOUNT_FRAME)
        self.click(LOGOUT_BUTTON)
        self.wait_page_loaded()
        print("[INFO] : Logged out.")



    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True))
    @Session.log_event
    def send_mail(self, to, subject, content, attached_file_size=0):

        self.click(COMPOSE_BUTTON)
        self.type(RECIPIENT_FIELD, to, hit_enter=True)
        self.type(SUBJECT_FIELD, subject)
        self.type(EMAIL_BODY, content)

        if attached_file_size:
            script_dir = os.path.dirname(os.path.abspath(__file__))
            relative_path = ATTACHED_FILES + f"{attached_file_size}MiB.txt"
            attached_file_path = os.path.normpath(os.path.join(script_dir, relative_path))
            self.file_input(ATTACH_FILE_INPUT, attached_file_path)

        self.click(SEND_BUTTON)
        self.stats["sent_mails"][attached_file_size] += 1
        print("[INFO] : Mail Sent.")


        
    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True))
    @Session.log_event  
    def filter(self):
        '''
        Show only unread emails
        '''
  
        # Wait for the search bar to be clickable
        self.click(SEARCH_BAR)
        # Type the filter criteria (inbox + unread) and press Enter
        self.type(SEARCH_BAR, "is:unread in:inbox", hit_enter=True)

        print("[INFO] : Filtered emails, showing unread only.")
        

    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def home_page(self, force=False):
        '''
        Navigate to the Gmail homepage (mailbox). If force is enabled or an error occurs,
        refresh the page by navigating directly to the URL.
        '''
        if force:
            self.driver.get(HOME_PAGE_URL)
            # Handle potential alert popups
            try:
                alert = self.switch_frame(alert=True)
                alert.accept()
                self.stats["refresh"] += 1
            except TimeoutException:
                print("[DEBUG] : Forced refresh to homepage.")

        else:
            try:
                # Click on the inbox link
                self.click(INBOX_LINK)
                # Move mouse out of left pane to ensure visibility
                self.move_mouse_to(BODY_ELEMENT)

                self.stats["refresh"] += 1
                print("[INFO] : Navigated to homepage.")

            except Exception as e:
                print("[DEBUG] : Failed to click mailbox link. Trying force refresh.")
                self.home_page(force=True)


    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True))
    @Session.log_event
    def delete_drafts(self):
        try:
            self.find(DRAFTS_COUNT)
        except TimeoutException:
            print("[INFO] : No Drafts")
            return
        else:
            self.click(DRAFTS_FOLDER)
            self.move_mouse_to(BODY_ELEMENT)
            self.click(SELECT_ALL_DRAFTS)
            self.click(DELETE_BUTTON)
            print("[INFO] : Drafts deleted.")
        self.home_page(force=True)
        


    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True),
                              lambda self : self.filter())
    def get_sender_address(self):
        '''
        Retrieve the sender's address from the first email in the inbox.
        '''
        # Wait for the first sender's span to be visible and retrieve the email attribute
        sender = self.find(FIRST_SENDER_SPAN).get_attribute("email")
        # Check if the sender matches the user's email address
        if sender == self.user_address:
            print("[DEBUG] : Sender matches user's address. Checking secondary span.")
            sender = self.find(SECOND_SENDER_SPAN).get_attribute("email")
            print("[DEBUG] : Found sender address in the second span.")

        print(f"[INFO] : Sender = {sender}.")
        return sender



    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                              DELAY,
                              lambda self : self.home_page(force = True),
                              lambda self : self.filter(),
                              lambda self : self.read_first())
    def get_subject(self):
        '''
        Retrieve the subject of an opened email.
        '''
        # Wait for the email subject to be visible and retrieve its text
        subject = self.find(EMAIL_SUBJECT).text
        print(f"[INFO] : Found the email subject: {subject}.")
        return subject
    
    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS,
                                DELAY,
                                lambda self : self.home_page(force = True),
                                lambda self : self.filter())
    @Session.log_event
    def read_first(self):
        '''
        Open the first email in the inbox.
        '''
        self.click(FIRST_EMAIL_ITEM)
        self.pause(READING_TIME)
        self.stats["read_mails"] += 1
        print("[INFO] : Opened the first email.")



    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS, DELAY,
                            lambda self: self.home_page(force=True),
                            lambda self: self.filter(),
                            lambda self: self.read_first()
    )
    @Session.log_event
    def delete_first(self):
        '''
        Delete the first email in the inbox.
        '''
        self.click(DELETE_ICON)
        self.stats["deleted_mails"] += 1
        print("[INFO] : Deleted the first email.")


    @Session.time_limited_execution
    @Session.retry_on_failure(MAX_ATTEMPTS, DELAY,
                            lambda self: self.home_page(force=True),
                            lambda self: self.filter(),
                            lambda self: self.read_first()
    )
    @Session.log_event
    def reply(self, answer):
        '''
        Reply to an opened email.
        '''
        # Click the reply button
        self.click(REPLY_BUTTON)
        # Write the reply in the editor
        self.type(EDITOR_INPUT, answer)
        # Click on Send
        self.click(SEND_BUTTON)
        # Navigate back to the home page
        self.home_page()

        self.stats["answered_mails"] += 1
        print("[INFO] : Response sent.")
