# standard libraries
import math
import random
import threading
import time
from datetime import timedelta
import csv


# local import
from constants import *
from sessions import OutlookSession, ProtonSession
import utils
from utils import (
    select_random_moments,
    handle_arguments,
    extract_unique_id,
    THREAD_LOCAL_STORAGE
)


class Scenario:
    
    id = 0
    
    def __init__(self, user, user_address, user_psw, contacts, provider, browser, 
                 time_limit, n_mail_to_send, n_mail_to_read, n_mail_to_answer):
        # Identifier
        self.id == Scenario.id
        Scenario.id += 1
        self.name = str(self.id) + " " + user_address
        # Initial objective of the session
        self.user = user
        self.user_address = user_address
        self.user_psw = user_psw
        self.contacts = contacts
        self.provider = provider
        self.browser = browser
        self.time_limit = time_limit
        self.n_mail_to_send = n_mail_to_send
        self.n_mail_to_read = n_mail_to_read
        self.n_mail_to_answer = n_mail_to_answer
        # Final stat of the session
        self.sent_mails = 0
        self.read_mails = 0
        self.answered_mails = 0
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
            f"Duration: {self.time_limit} minutes\n"
            f"Number of mails to send: {self.n_mail_to_send}\n"
            f"Number of mails to read: {self.n_mail_to_read}\n"
            f"Number of mails to answer: {self.n_mail_to_answer}\n\n\n"
        )
        if self.finished:
            output += (
                "**** Final Stat of the Session ****\n\n"
                f"Sent mails: {self.stats["sent_mails"]}\n"
                f"Read mails: {self.stats["read_mails"]}\n"
                f"Answered mails: {self.stats["answered_mails"]}\n"
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
            session = OutlookSession(self.user_address, self.user_psw, self.browser, self.seconds)
        elif self.provider == PROTON:
            session = ProtonSession(self.user_address, self.user_psw, self.browser, self.seconds)
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
        Read the first unread email:
            - Check if the sender is in the list of contacts
            - If it is, then open mail and send the predefined answer
            - If not, delete the email
        '''
        session.filter()
        session.read_first()
        session.delete_first()

    def read_and_answer(self, session):
        '''
        Read the first unread email:
            - Check if the sender is in the list of contacts
            - If it is, then open mail and send the predefined answer
            - If not, delete the email
        '''
        session.delete_drafts()
        session.filter()
        session.read_first()
        sender = session.get_sender_address()
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
                self.remaining_answers -= 1
            else:
                session.delete_first()
        else:
            session.delete_first()
        
            
    def run(self):
        '''
        This function executes the simulated session assigning each action (i.e.: send mail, read and answer, ...)
        to a random point in the time range [start, start + time_limit]
        '''
        
        # Customize the output printing
        THREAD_LOCAL_STORAGE.color = COLORS[self.id]
        THREAD_LOCAL_STORAGE.name = self.name
        
        # Print current scenario objective
        print(self)

        # Prepare the session schedule
        n_operations = self.n_mail_to_send + self.n_mail_to_read + self.n_mail_to_answer
        self.seconds = self.time_limit*60
        moments = select_random_moments(0, self.seconds, n_operations)
    
        # Log in on the mail provider website
        session = self.get_session()
        session.login()

        # Open the CSV file containing email subjects and bodies
        file_path = self.get_email_file_path()[0]
        with open(file_path, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            mails = list(reader)
        
            # Send the specified number of mails
            for idx in range(self.n_mail_to_send):
        
                wait = moments[idx] + self.start - time.time()
                while wait > 0:
                    print(f"[INFO] : Waiting {round(wait)} seconds before next action")
                    time.sleep(wait)
                    wait = moments[idx] + self.start - time.time()
            
                # Send a random mail from the list
                mail = random.choice(mails)
                subject = mail[SUBJECT_COL]
                content = mail[CONTENT_COL]
                session.send_mail(self.contacts[0], subject, content)
                session.home_page()
        
        # Read and Answer the specified number of mails
        self.remaining_answers = self.n_mail_to_answer        
        for idx in range(self.n_mail_to_send, self.n_mail_to_send + self.n_mail_to_read):
            
            wait = moments[idx] + self.start - time.time()
            while wait > 0:
                print(f"[INFO] : Waiting {round(wait)} seconds before next action")
                time.sleep(wait)
                wait = moments[idx] + self.start - time.time()
            
            if self.remaining_answers > 0 :
                self.read_and_answer(session)
            else:
                self.read_and_delete(session)
            session.home_page()
        
        # Logout, close browser and collect final stats and print summary

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
        # We deactivate this function when measurement are performed since mounted volumes (in containers used by GMT) are read only.
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
    