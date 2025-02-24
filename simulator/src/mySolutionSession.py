# Local imports

from sessions import *


# =====================================================================================
# =============== My Solution Session ======================================================
# =====================================================================================

# Constants for URLs
MY_SOLUTION_URL = "https://my-solution.com/"
HOME_PAGE_URL = "https://my-solution.com/?_task=mail"
LOGGED_IN_URL = "https://my-solution.com/?_task=mail&_mbox=INBOX"
SENT_URL = "https://my-solution.com/?_task=mail&_mbox=INBOX"
REPLY_SENT_URL = "https://my-solution.com/?_task=mail&_mbox=INBOX&_filter=UNSEEN&_scope=base"

# Constants for selectors
USERNAME_INPUT = (By.ID, "rcmloginuser")
PASSWORD_INPUT = (By.ID, "rcmloginpwd")
LOGIN_BUTTON = (By.ID, "rcmloginsubmit")
LOGOUT_BUTTON = (By.XPATH, "//*[@id='rcmbtn109']")
COMPOSE_BUTTON = (By.ID, "rcmbtn103")
RECIPIENT_FIELD = (By.XPATH, "//*[@id='compose_to']/div/div/ul/li/input")
SUBJECT_FIELD = (By.XPATH, "//*[@id='compose-subject']")
EMAIL_BODY_IFRAME = (By.XPATH, "//*[@id='composebody']")
ENCRYPT_BUTTON = (By.XPATH, "//*[@id='rcmbtn111']")
PGP_ATTACHMENT_INPUT = (By.XPATH, "//input[@type='file']")
MAILVELOPE_PSW_INPUT = (By.XPATH, "//input[@type='password']")
MAILVELOPE_REMEMBER_CHECKBOX = (By.XPATH, "//label[@for='remember']")
MAILVELOPE_CONFIRM_BUTTON = (By.XPATH, "//button[text()='OK']")
ATTACH_FILE_INPUT = (By.XPATH, "//input[@id='uploadformInput']")
SEND_BUTTON = (By.XPATH, "//button[@value='Envoyer']")
REFRESH_BUTTON = (By.XPATH, "//*[@id='rcmbtn111']")
UNREAD_FILTER_OPTION = (By.XPATH, "//*[@id='layout-list']/div[2]/a[2]")
HOME_PAGE_LINK = (By.XPATH, "//*[@id='rcmbtn104']")
FIRST_EMAIL_SUBJECT = (By.XPATH, "//tr[1]/td[2]/span[4]/a/span")
FIRST_EMAIL_ITEM = (By.XPATH, "//tr[1]/td[2]/span[1]/span/span")
FIRST_EMAIL_ITEM_IF_ENCRYPTED = (By.XPATH, "(//tr[./td[2]/span[1]/span/span])[1]//span[@class='encrypted']")
DELETE_EMAIL_BUTTON = (By.XPATH, "//*[@id='rcmbtn123']")
REPLY_BUTTON = (By.XPATH, "//*[@id='toolbar-menu']/li[2]")
EMAIL_REPLY_EDITOR = (By.XPATH, "//*[@id='composebody']")
SEND_BUTTON_REPLY = (By.XPATH, "//button[@value='Envoyer']")
MAILVELOPE_REPLY_EDITOR = (By.XPATH, "//*[@id='root']/textarea")


class MySolutionSession(Session):

    def __init__(self, user_address, user_psw, browser_name, adblock, untracked, pgp, time_limit=TIME_LIMIT, no_time_limit=False):
        super().__init__(user_address, user_psw, browser_name, adblock, untracked, pgp, time_limit, no_time_limit)

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
        self.stats["login"] += 1
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
        self.stats["logout"] += 1
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
        self.click(COMPOSE_BUTTON)
        self.type(RECIPIENT_FIELD, to, hit_enter=True)
        self.type(SUBJECT_FIELD, mail_object)
        self.type(EMAIL_BODY_IFRAME, mail_body)

        def attach_files(input_selector):
            script_dir = os.path.dirname(os.path.abspath(__file__))
            relative_path = ATTACHED_FILES + f"{attached_file_size}MiB.txt"
            attached_file_path = os.path.normpath(os.path.join(script_dir, relative_path))
            if self.pgp:
                self.switch_frame(frame_number=0)
            self.file_input(input_selector, attached_file_path)
            if self.pgp:
                self.switch_frame()
            self.pause(TIME_PER_MB * attached_file_size)

        if self.pgp:
            self.click(ENCRYPT_BUTTON)
            self.pause()
            if attached_file_size:
                attach_files(PGP_ATTACHMENT_INPUT)
                
            self.click(SEND_BUTTON)
            self.handle_mailvelope_window()
        else:
            if attached_file_size:
                attach_files(ATTACH_FILE_INPUT)
            self.click(SEND_BUTTON)

        self.wait_page_loaded(SENT_URL)        
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
        # Check first email Item exists. Otherwise it will throw error.
        self.find(FIRST_EMAIL_ITEM)

        #Check whether the first email is encrypted
        try:
            self.driver.find_element(*FIRST_EMAIL_ITEM_IF_ENCRYPTED)
            self.is_encrypted = True
        except NoSuchElementException:
            self.is_encrypted = False

        if self.pgp and self.is_encrypted:
            self.click(FIRST_EMAIL_ITEM)
            self.handle_mailvelope_window()

        elif not self.pgp and not self.is_encrypted:
            self.click(FIRST_EMAIL_ITEM)
        
        else:
            raise Exception(f"[ERROR] : Can't read first. Email ({"" if self.is_encrypted else "not " }encrypted) not eligible for current PGP mode : {"A" if self.pgp else "Dea"}ctivated")                

        self.pause(READING_TIME)
        print("[INFO] : Read first email.")
        self.stats["read_mails"] += 1
        return 0
        



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
        if (self.pgp and self.is_encrypted) or (not self.pgp and not self.is_encrypted):
            self.click(DELETE_EMAIL_BUTTON)
            print("[INFO] : Deleted the email.")
            self.stats["deleted_mails"] += 1

        else:
            raise Exception(f"[ERROR] : Can't delete first. Email ({"" if self.is_encrypted else "not " }encrypted) not eligible for current PGP mode : {"A" if self.pgp else "Dea"}ctivated")   
        



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

        if self.is_encrypted and self.pgp:

            self.handle_mailvelope_window()
            self.wait_page_loaded()
            # Switch to nested iframe
            self.switch_frame(frame_name=0)
            self.switch_frame(frame_name=0)
            # Write answer
            self.type(MAILVELOPE_REPLY_EDITOR, answer)
            # Switch back to the main content
            self.switch_frame()
            self.switch_frame()
        elif not self.is_encrypted and not self.pgp:
            # Type answer
            self.click(EMAIL_REPLY_EDITOR)
            self.type(EMAIL_REPLY_EDITOR, answer)
        else:
            raise Exception(f"[ERROR] : Can't reply. Email ({"" if self.is_encrypted else "not " }encrypted) not eligible current PGP mode : {"A" if self.pgp else "Dea"}ctivated")    
        
        # Send the reply
        self.click(SEND_BUTTON_REPLY)
        self.wait_page_loaded(REPLY_SENT_URL)
        
        self.stats["answered_mails"] += 1
        print("[INFO] : Reply sent.")

    def handle_mailvelope_window(self, max_wait_time=MAILVELOPE_POPUP_WAIT_TIME):

        # Track the start time and #handled_windows for loop control
        start_time = time.time()  
        handled_windows = 0
        
        while True:
            # Get all current window handles
            windows = self.driver.window_handles            
            for window in windows:
                self.driver.switch_to.window(window)
                if 'mailvelope' in self.driver.title.lower():
                    print(f"[DEBUG] : Switching to Mailvelope window.")
                    
                    # Handle the credentials and confirm button
                    self.type(MAILVELOPE_PSW_INPUT, self.psw)

                    # # Optionally handle the "remember" checkbox if it's not selected
                    # remember_checkbox = self.find(MAILVELOPE_REMEMBER_CHECKBOX)
                    # if remember_checkbox and not remember_checkbox.is_selected():
                    #     remember_checkbox.click()
                    
                    self.click(MAILVELOPE_CONFIRM_BUTTON)
                    self.pause()
                    
                    # After handling, ensure we switch back to the main window
                    self.driver.switch_to.window(windows[0])
                    handled_windows += 1

            # Check if we handled the window or if we've waited for too long
            elapsed_time = time.time() - start_time
            if handled_windows > 0 or elapsed_time > max_wait_time:
                
                # Ensure non-main windows are closed
                windows = self.driver.window_handles
                if len(windows) > 1:
                    for window in windows[1:]:
                        self.driver.switch_to.window(window)
                        self.driver.close()
                
                # Switch back to the main window
                self.driver.switch_to.window(windows[0])
                break  # Exit the loop after handling all windows

            # Small delay before checking for new windows again
            self.pause(1)
