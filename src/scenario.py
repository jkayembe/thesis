# standard libraries
import math
import random
import threading
import time
from datetime import timedelta
import csv


# local import
from constants import *
from sessions import GmailSession
from protonSession import ProtonSession
from outlookSession import OutlookSession
import utils
from utils import (
    select_evenly_spaced_moments,
    handle_arguments,
    extract_unique_id,
    THREAD_LOCAL_STORAGE
)


class Scenario:
    
    id = 0
    
    def __init__(self, user, user_address, user_psw, contacts, provider, browser, adblock, untracked,
                 time_limit, n_mail_to_send, n_mail_to_read_and_answer, n_mail_to_read_and_delete):
        # Identifier
        self.id == Scenario.id
        Scenario.id += 1
        self.name = str(self.id) + " " + user_address
        
        # Initial objectives of the session
        self.user = user
        self.user_address = user_address
        self.user_psw = user_psw
        self.contacts = contacts
        self.provider = provider
        self.browser = browser
        self.adblock = adblock
        self.untracked = untracked
        self.time_limit = time_limit # in minutes
        self.n_mail_to_send = n_mail_to_send
        self.n_mail_to_read_and_answer = n_mail_to_read_and_answer
        self.n_mail_to_read_and_delete = n_mail_to_read_and_delete

        # Final stat of the session
        self.start = time.time()
        self.end = self.start
        self.duration = 0
        self.finished = False

    def __str__(self):
        output = (
            "\n\n**** User Data ****\n\n"
            f"User: {self.user_address}\n"
            f"Provider: {self.provider}\n"
            f"Contacts: {', '.join(self.contacts)}\n\n\n"
            "**** Objective of the Session ****\n\n"
            f"Browser: {self.browser}\n"
            f"Tracking: {"limited" if self.untracked else "allowed"}\n"
            f"Adblock: {"activated" if self.adblock else "not used"}\n"
            f"Duration: {self.time_limit} minutes\n"
            "Number of emails to send with:\n"
            f"\t No attachment: {self.n_mail_to_send[0]}\n"
            f"\t 5 MB attachment: {self.n_mail_to_send[5]}\n"
            f"\t 10 MB attachment: {self.n_mail_to_send[10]}\n"
            f"\t 15 MB attachment: {self.n_mail_to_send[15]}\n"
            f"\t 20 MB attachment: {self.n_mail_to_send[20]}\n"
            f"\t 25 MB attachment: {self.n_mail_to_send[25]}\n"
            f"Number of emails to read and answer: {self.n_mail_to_read_and_answer}\n"
            f"Number of emails to read and delete: {self.n_mail_to_read_and_delete}\n\n\n"
        )
        if self.finished:
            output += (
                "**** Final Stat of the Session ****\n\n"
                f"Sent emails with: \n"
                f"\t No attachment: {self.stats['sent_mails'][0]}\n"
                f"\t 5 MB attachment: {self.stats['sent_mails'][5]}\n"
                f"\t 10 MB attachment: {self.stats['sent_mails'][10]}\n"
                f"\t 15 MB attachment: {self.stats['sent_mails'][15]}\n"
                f"\t 20 MB attachment: {self.stats['sent_mails'][20]}\n"
                f"\t 25 MB attachment: {self.stats['sent_mails'][25]}\n"
                f"Read emails: {self.stats["read_mails"]}\n"
                f"Answered emails: {self.stats["answered_mails"]}\n"
                f"Deleted emails: {self.stats["deleted_mails"]}\n"
                f"Start time: {time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(self.start))}\n"
                f"End time: {time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(self.end))}\n"
                f"Duration: {str(timedelta(seconds=self.duration))}\n\n\n"
            )
        return output
    
    def get_session(self):
        '''
        This function opens a session on the email service provider's website
        '''
        if self.provider == OUTLOOK:
            session = OutlookSession(self.user_address, self.user_psw, self.browser, self.adblock, self.untracked, self.seconds)
        elif self.provider == PROTON:
            session = ProtonSession(self.user_address, self.user_psw, self.browser, self.adblock, self.untracked, self.seconds)
        elif self.provider == GMAIL:
            session = GmailSession(self.user_address, self.user_psw, self.browser, self.adblock, self.untracked, self.seconds)
        return session
    
    def get_email_file_path(self, firstname=None, surname=None):
        '''
        Return the abslute path to the csv files user_emails.csv and user_answers.csv
        '''
        if firstname is None:
            firstname, surname = self.user.split(' ')
        # relative file paths (relative to script dir)
        emails_csv_file_path = EMAILS_FOLDER + firstname.lower() + "_" + surname.lower() + EMAILS_CSV
        answers_csv_file_path = EMAILS_FOLDER + firstname.lower() + "_" + surname.lower() + ANSWERS_CSV
        # abslute script dir
        script_dir = os.path.dirname(os.path.abspath(__file__))
        # absolute file paths
        emails_csv_file_path = os.path.join(script_dir, emails_csv_file_path)
        answers_csv_file_path = os.path.join(script_dir, answers_csv_file_path)
        
        return emails_csv_file_path, answers_csv_file_path
    
    def select_answer(self, sender, unique_id):
        '''
        This function fetches the predefined answer to a given email recieved
        '''
        # Assuming addresses of the type firstname.surname.ulb.test@domain.com
        sender = sender.split("@")[0]
        firstname, surname = sender.split(".")[0:2]
        answers_csv_file_path = self.get_email_file_path(firstname=firstname, surname=surname)[1]
        with open(answers_csv_file_path, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if int(row['UNIQUE_ID']) == unique_id:
                    return row['ANSWER_CONTENT']
            return None  # Return None if no matching unique_id is found
        
    def read_and_delete(self, session):
        '''
        Read the first unread email and delete it
        '''
        session.filter()
        session.read_first()
        session.delete_first()

    def read_and_answer(self, session):
        '''
        Read the first unread email:
            - Check if the sender is in the list of contacts
            - If it is, open the email and send the predefined answer
            - If not, open the email then delete the it
        '''
        session.delete_drafts()
        session.filter()
        sender = session.get_sender_address()
        session.read_first()
        if sender in self.contacts:
            subject = session.get_subject()
            unique_id = None
            try:
                unique_id = extract_unique_id(subject)
            except Exception as e:
                print("[DEBUG] : No Subject Matching")
                
            if unique_id is not None:
                answer = self.select_answer(sender, unique_id)
                session.reply(answer)
            else:
                session.delete_first()
        else:
            session.delete_first()
        

    def execute_action(self, moment, session, action_func, *args):
        """
        Handles the wait and execution of the specified action.
        """
        wait = moment + self.start - time.time()
        while wait > 0:
            print(f"[INFO] : Waiting {round(wait)} seconds before next action")
            time.sleep(wait)
            wait = moment + self.start - time.time()

        action_func(*args)
        session.home_page()

    def run(self):
        '''
        This function executes the simulated session assigning each action (i.e.: send mail, read_and_answer ...)
        to a random point in the time range [start, start + time_limit]
        '''
        
        # Customize the output printing
        THREAD_LOCAL_STORAGE.color = COLORS[self.id]
        THREAD_LOCAL_STORAGE.name = self.name
        
        # Print current scenario objective
        print(self)

        # Prepare the session schedule
        total_mail_to_send = sum(self.n_mail_to_send.values())
        n_operations = total_mail_to_send + self.n_mail_to_read_and_answer + self.n_mail_to_read_and_delete
        self.seconds = math.ceil(self.time_limit * 60)
        moments = select_evenly_spaced_moments(0, self.seconds, n_operations)

    
        # Log in on the mail provider website
        session = self.get_session()
        session.login()

        # Open the CSV file containing email subjects and bodies
        file_path = self.get_email_file_path()[0]
        with open(file_path, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            mails = list(reader)
        
            # Initialize the index for moments
            idx = 0

            # Send the specified number of emails with different attachment sizes
            for attachment_size, count in self.n_mail_to_send.items():
                for _ in range(count):
                    mail = random.choice(mails)
                    subject = mail[SUBJECT_COL]
                    content = mail[CONTENT_COL]
                    self.execute_action(moments[idx], session, session.send_mail, self.contacts[0], subject, content, attachment_size)
                    idx += 1

            # Read and Answer the specified number of emails     
            for _ in range(self.n_mail_to_read_and_answer):
                self.execute_action(moments[idx], session, self.read_and_answer, session)
                idx += 1

            # Read and Delete the specified number of emails    
            for _ in range(self.n_mail_to_read_and_delete):
                self.execute_action(moments[idx], session, self.read_and_delete, session)
                idx += 1

        # Logout, close browser, collect final stats and print summary
        rest = round(self.seconds - (time.time() - self.start) - 5)
        if (rest > 0):
            time.sleep(rest)
        session.logout()
        session.close_browser()
        self.stats = session.stats
        self.end = time.time()
        self.duration = self.end - self.start
        self.finished = True
        print(self)

        # Save summary
        # We deactivate this function when measurements are performed since mounted volumes (in containers used by GMT) are read only.
        if not IS_MEASURED:
            summary_file_path = session.log_file_path + ".summary"
            os.makedirs(os.path.dirname(summary_file_path), exist_ok=True)
            with open(summary_file_path, 'a') as summary_file:
                print(self, file=summary_file)
            
        return 0


def main():

    random.seed(SEED)
    
    threads = []
    scenarios_parameters = handle_arguments()
    
    for sp in scenarios_parameters:
        scenario = Scenario(*sp)
        thread = threading.Thread(target=scenario.run)
        threads.append(thread)
        thread.start()

    # Wait for all threads to complete
    for thread in threads:
        thread.join()
       

if __name__ == "__main__":   
    main()
    