# Local imports

from sessions import Session, WebDriver
from constants import *

# Third parties imports

from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys


# ===================================================================================================================================
# =============== Proton Session =====================================================================================================        
# ===================================================================================================================================

# Constants for URLs
PROTON_URL = "https://account.proton.me/fr/mail"
HOME_PAGE_URL = "https://account.proton.me/fr/mail"

# Constants for selectors
USERNAME_INPUT = (By.ID, "username")
PASSWORD_INPUT = (By.ID, "password")
LOGIN_BUTTON = (By.CSS_SELECTOR, ".button-large")
USER_AVATAR = (By.CSS_SELECTOR, ".my-auto > .m-auto")
LOGOUT_BUTTON = (By.CSS_SELECTOR, ".pb-4 > .button")
COMPOSE_BUTTON = (By.XPATH, "//div[3]/div/div/div/div[1]/div[2]/button")
RECIPIENT_FIELD = (By.XPATH, "//div/div/div/div/div/div/input")
SUBJECT_FIELD = (By.XPATH, "//input[contains(@id, 'subject-composer')]")
EMAIL_BODY_IFRAME = (By.XPATH, "/html/body/div[1]/div/div[@id='rooster-editor']")
ATTACH_FILE_INPUT = (By.XPATH, "//div[2]/div/div/label/input")
SEND_BUTTON = (By.XPATH, "//footer/div/div/button/span")
REFRESH_BUTTON = (By.XPATH, "//span/span/span")
FILTER_BUTTON = (By.XPATH, "//main/div/div/div/div/div/div/div/nav/div[2]/div/button")
UNREAD_FILTER_OPTION = (By.CSS_SELECTOR, ".dropdown-item:nth-child(4) > .dropdown-item-button")
HOME_PAGE_LINK = (By.XPATH, "//span/span/span")
COMPOSE_IFRAME_ALERT = EC.alert_is_present()
FIRST_EMAIL_SUBJECT = (By.XPATH, "//section/div/div[3]/div/header/div/h1/span")
FIRST_EMAIL_ITEM = (By.CSS_SELECTOR, ".item-container-wrapper:nth-child(1) .item-senders .inline-block > span")
DELETE_EMAIL_BUTTON = (By.CSS_SELECTOR, ".flex-1 > div > .toolbar .flex:nth-child(4)")
REPLY_BUTTON = (By.CSS_SELECTOR, ".button-for-icon:nth-child(1) > .rtl\\3Amirror")
EMAIL_REPLY_IFRAME = (By.ID, "rooster-editor")
SEND_BUTTON_REPLY = (By.XPATH, "//footer/div/div/button/span")




class ProtonSession(Session):

    def __init__(self, user_address, user_psw, browser_name, adblock, untracked, time_limit=TIME_LIMIT):
        super().__init__(user_address, user_psw, browser_name, adblock, untracked, time_limit)

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def login(self):
        '''
        Log in to the mail provider website
        '''
        try:
            # Open the login page
            self.driver.get(PROTON_URL)
            self.pause()

            # Enter username
            username_input = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(USERNAME_INPUT)
            )
            username_input.click()
            username_input.send_keys(self.user_address)
            self.pause()

            # Enter password
            password_input = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(PASSWORD_INPUT)
            )
            password_input.click()
            password_input.send_keys(self.psw)
            self.pause()

            # Click on the login button
            login_button = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(LOGIN_BUTTON)
            )
            login_button.click()
            print("[INFO] : Logged in.")

            # Wait for the page to load
            self.pause(10)

        except Exception as e:
            raise e

    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def logout(self):
        '''
        This function logs out of the proton website
        '''
        try:
            # Click on user avatar
            user_avatar = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(USER_AVATAR)
            )
            user_avatar.click()
            self.pause()

            # Click on logout button
            logout_button = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(LOGOUT_BUTTON)
            )
            logout_button.click()
            self.pause()

            print("[INFO] : Logged out.")

        except Exception as e:
            self.home_page(force=True)
            raise e
        

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def send_mail(self, to, mail_object, mail_body, attached_file_size=0):
        '''
        Composer et envoyer un email avec un destinataire, un objet et un contenu spécifiés.
        '''
        try:
            # Cliquer sur le bouton de rédaction
            compose_button = WebDriverWait(self.driver, 20).until(
                EC.element_to_be_clickable(COMPOSE_BUTTON)
            )
            compose_button.click()
            self.pause()
        
            # Saisir le destinataire
            recipient_field = WebDriverWait(self.driver, 10).until(
                EC.visibility_of_element_located(RECIPIENT_FIELD)
            )
            recipient_field.send_keys(to)
            recipient_field.send_keys(Keys.ENTER)
            self.pause()
            
            # Saisir l'objet du mail
            subject_field = WebDriverWait(self.driver, 10).until(
                EC.visibility_of_element_located(SUBJECT_FIELD)
            )
            subject_field.send_keys(mail_object)
            self.pause()
            
            # Changer de contexte vers le cadre de contenu du mail
            self.driver.switch_to.frame(0)
            self.pause()
            
            # Saisir le contenu du mail
            email_body = WebDriverWait(self.driver, 10).until(
                EC.visibility_of_element_located(EMAIL_BODY_IFRAME)
            )
            self.driver.execute_script(
                "if(arguments[0].contentEditable === 'true') {arguments[0].innerText = arguments[1]}",
                email_body, mail_body
            )
            self.pause()
            
            # Revenir au contexte par défaut
            self.driver.switch_to.default_content()
            self.pause()

            # Attacher un fichier si nécessaire
            if attached_file_size:
                script_dir = os.path.dirname(os.path.abspath(__file__))
                relative_path = ATTACHED_FILES + f"{attached_file_size}MiB.txt"
                attached_file_path = os.path.normpath(os.path.join(script_dir, relative_path))
                attach_file_input = self.driver.find_element(*ATTACH_FILE_INPUT)
                attach_file_input.send_keys(attached_file_path)
                self.pause(2 * attached_file_size)
            
            # Cliquer sur le bouton d'envoi
            send_button = self.driver.find_element(*SEND_BUTTON)
            send_button.click()
            self.pause()
            
            self.stats["sent_mails"][attached_file_size] += 1
            print("[INFO] : Sent mail.")

        except Exception as e:
            self.home_page(force=True)
            raise e

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def filter(self):
        '''
        Afficher uniquement les emails non lus
        '''
        try:
            # Rafraîchir la boîte de réception
            refresh_button = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(REFRESH_BUTTON)
            )
            refresh_button.click()
            print("[INFO] : Mailbox refreshed")
            self.pause()
            
            # Cliquer sur le bouton de filtre
            filter_button = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(FILTER_BUTTON)
            )
            filter_button.click()
            self.pause()
            
            # Sélectionner l'option "non lus"
            unread_filter_option = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(UNREAD_FILTER_OPTION)
            )
            unread_filter_option.click()
            print("[INFO] : Emails filtrés, affichage des non lus uniquement.")
            self.pause()
            
        except Exception as e:
            self.home_page(force=True)
            raise e
    
    
    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    @Session.log_event
    def home_page(self, force=False):
        '''
        Navigates to the home page (mailbox).
        '''
        if force:
            self.driver.get(HOME_PAGE_URL)
            self.pause()
            try:
                WebDriverWait(self.driver, 10).until(COMPOSE_IFRAME_ALERT, 'Timed out waiting for popup to appear.')
                alert = self.driver.switch_to.alert
                alert.accept()
                self.pause()
                self.stats["refresh"] += 1
            except TimeoutException:
                print("[DEBUG] : No alert found.")
        else:
            try:
                mailbox_link = WebDriverWait(self.driver, 10).until(
                    EC.visibility_of_element_located(HOME_PAGE_LINK)
                )
                mailbox_link.click()
                self.pause()
                self.stats["refresh"] += 1
            except Exception as e:
                print("[DEBUG] : Failed to click mailbox link. Trying force refresh.")
                self.home_page(force=True)

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_sender_address(self):
        '''
        Retrieves the sender's email address from the first email in the list.
        '''
        try:
            sender = WebDriverWait(self.driver, 10).until(
                EC.visibility_of_element_located(FIRST_EMAIL_ITEM)
            ).get_attribute("title")
            print(f"[INFO] : Sender's address= {sender}.")
            self.pause()
            return sender
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            raise e

    @Session.time_limited_execution
    @Session.retry_on_failure(max_attempts=MAX_ATTEMPTS, delay=DELAY)
    def get_subject(self):
        '''
        Retrieves the subject of the currently opened email.
        '''
        try:
            subject = WebDriverWait(self.driver, 10).until(
                EC.visibility_of_element_located(FIRST_EMAIL_SUBJECT)
            ).text
            print(f"[INFO] : Found subject = {subject}")
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
        Opens the first email in the list.
        '''
        try:
            first_email = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(FIRST_EMAIL_ITEM)
            )
            first_email.click()
            print("[INFO] : Read first email.")
            self.stats["read_mails"] += 1
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
        Deletes the first email in the list.
        '''
        try:
            delete_button = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(DELETE_EMAIL_BUTTON)
            )
            delete_button.click()
            print("[INFO] : Deleted the email.")
            self.stats["deleted_mails"] += 1
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
        Replies to an opened email.
        '''
        try:
            reply_button = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(REPLY_BUTTON)
            )
            reply_button.click()
            print("[DEBUG] : Clicked on Reply")
            self.pause()

            # Switch to the reply iframe
            self.driver.switch_to.frame(1)
            reply_frame = WebDriverWait(self.driver, 10).until(
                EC.visibility_of_element_located(EMAIL_REPLY_IFRAME)
            )
            print("[DEBUG] : Switched to reply iframe.")
            self.driver.execute_script(
                "if(arguments[0].contentEditable === 'true') {arguments[0].innerText = arguments[1]}",
                reply_frame, answer
            )
            print("[DEBUG] : Email response set.")
            self.pause()

            # Switch back and send the reply
            self.driver.switch_to.default_content()
            send_button = WebDriverWait(self.driver, 10).until(
                EC.element_to_be_clickable(SEND_BUTTON_REPLY)
            )
            send_button.click()
            print("[DEBUG] : Clicked the Send button.")
            self.stats["answered_mails"] += 1
            print("[INFO] : Reply sent.")
            self.pause()
        except Exception as e:
            self.home_page(force=True)
            self.filter()
            self.read_first()
            raise e