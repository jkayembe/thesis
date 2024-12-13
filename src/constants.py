# Standard imports :
import os

# Set seed for reproducibility
SEED = int(os.environ.get("SEED", "321"))


# Login webpages URL

OUTLOOK_URL = "https://go.microsoft.com/fwlink/p/?LinkID=2125442&deeplink=owa%2F"
PROTON_URL = "https://account.proton.me/fr/mail"
GMAIL_URL =  "https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin"


# General constants :
PROTON = "proton"
OUTLOOK = "outlook"
GMAIL = "gmail"
PROVIDERS = [PROTON, OUTLOOK, GMAIL]
CHROME = "chrome"
BROWSERS = [CHROME,]


# Time Limits 

MAX_ATTEMPTS = 2            # Determines how many times the sessions functions are attempted (in case of failure)
DELAY = 1                   # Seconds between each attempts
WAIT_LIMIT = 10             # Max time for Selenium to find an html element :
MAX_PAGE_LOAD_TIME = 40      # Max time for a webpage to load
TIME_PER_MB = 2             # Seconds to wait for 1MB of attached file to be uploaded
READING_TIME = 5            # Seconds to read a mail

# Determine interval between each action: lower value to fasten the session
TIME_BETWEEN_ACTIONS = 2

# Keys for the Default arguments dictionnary :
USER = "USER"
USER_PASSWORD = "USER_PASSWORD"
PROVIDER = "PROVIDER"
BROWSER = "BROWSER"
ADBLOCK = "ADBLOCK"
UNTRACKED = "UNTRACKED"
TIME_LIMIT =  "TIME_LIMIT"
N_MAIL_SENT = "N_MAIL_SENT"
N_MAIL_READ_AND_ANSWER = "N_MAIL_READ_AND_ANSWER"
N_MAIL_READ_AND_DELETE = "N_MAIL_READ_AND_DELETE"
CONTACTS = "CONTACTS"
DOMAIN = "DOMAIN"

# Default arguments dicionnary for the scenarios :
SCENARIOS = {
    
    "scenario 1": {
        USER: "Jason Kayembe",
        USER_PASSWORD: "Azerty123",
        DOMAIN : ".ulb.test4@proton.me",
        CONTACTS: [ 
            "jason.kayembe.ulb.test3@outlook.com",
        ],
                  
        PROVIDER: PROTON,
        BROWSER: CHROME,
        ADBLOCK:"true",
        UNTRACKED:"true",   
        TIME_LIMIT: 3,
        N_MAIL_SENT: { # for each attachment size
            0: 0,   # no attachment
            5: 1,
            10: 0,
            15: 0,
            20: 0, 
            25: 0 
        },
       N_MAIL_READ_AND_ANSWER: 0,
       N_MAIL_READ_AND_DELETE: 0
    },
    
    # "scenario 2": {
    #     USER: "Jason Kayembe",
    #     USER_PASSWORD: "Azerty123",
    #     DOMAIN : ".ulb.test3@outlook.com",
    #     CONTACTS: [
    #         "jason.kayembe.ulb.test@gmail.com",
    #     ],   
    #     PROVIDER: OUTLOOK,
    #     BROWSER: CHROME,
    #     ADBLOCK:"false",
    #     UNTRACKED:"false",
    #     TIME_LIMIT: 100,
        # N_MAIL_SENT: { # for each attachment size
        #     0: 1,     # no attachment
        #     5: 1, 
        #     10: 0,
        #     15: 0, 
        #     20: 0,  
        #     25: 0 
        # },
    #    N_MAIL_READ_AND_ANSWER: 0,
    #    N_MAIL_READ_AND_DELETE: 0
    # }
    # "scenario 3": {
    #     USER: "Jason Kayembe",
    #     USER_PASSWORD: "Azerty.123",
    #     DOMAIN : ".ulb.test@gmail.com",
    #     CONTACTS: [
    #         "jason.kayembe.ulb.test3@outlook.com",
    #         "jason.kayembe@hotmail.com"
    #     ],   
    #     PROVIDER: GMAIL,
    #     BROWSER: CHROME,
    #     ADBLOCK:"true",
    #     UNTRACKED:"true",   
    #     TIME_LIMIT: 2,
    #     N_MAIL_SENT: { # for each attachment size
    #         0: 0,   # no attachment
    #         5: 0, 
    #         10: 0,  
    #         15: 0,  
    #         20: 0,  
    #         25: 0   
    #     },
    #     N_MAIL_READ_AND_ANSWER: 3,
    #     N_MAIL_READ_AND_DELETE: 0
    # }
}

# Check if the script is run from a container :
IS_CONTAINER = os.environ.get("IS_CONTAINER", "false").lower() == "true"

# Check if the script is being measured by the Green Metric Tool
#       - Used for logging : while measured with GMT, volumes mounted are read only.
#         Since the current directory is mounted in the container, it is not possible to log
#         into files contained in this directory.
#       - Instead we can format the stdout messages (ie: timestamp message) so that the GMT
#         uses those timestamp to map the messages occurences in the metrics timeseries.
IS_MEASURED = os.environ.get("IS_MEASURED", "false").lower() == "true"

# Files :
LOG_FOLDER = "../logs/"
EMAILS_FOLDER = "../emails_answers/"
ATTACHED_FILES = "../attached_files/"
ADBLOCK_FOLDER = "../ublock/"
CHROME_PROFILES = "../chrome_profiles/"
CONTAINER_CHROME_PROFILES = "/chrome_profiles/"
UNTRACKED_PROFILE = "untracked_profile"
TRACKED_PROFILE = "tracked_profile"
EMAILS_CSV = "_emails.csv"
ANSWERS_CSV = "_answers.csv"
UNIQUE_ID_COL = "UNIQUE_ID"
SUBJECT_COL = "SUBJECT"
CONTENT_COL = "CONTENT"
ANSWER_COL = "ANSWER_CONTENT"

# GPT 3.5 parameters for mails/answers generation
API_KEY = 'sk-proj-YArK0aQ6VGd9R9tUXxFCT3BlbkFJnQtgCXNwdeUW7wtyrLHa'
GPT_MODEL = "gpt-3.5-turbo"
TEMPERATURE = 0.7
CONTENT_LENGTH = 300
NUM_EMAILS_PER_INTEREST = 20

# Colors for the output of 
# ANSI color escape codes
# Add more colors if more than 10 threads
COLORS = {
    0: "\033[91m",  # thread 0 --> Red
    1: "\033[92m",  # thread 1 --> Green
    2: "\033[93m",  # thread 2 --> Yellow
    3: "\033[94m",  # thread 3 --> Blue
    4: "\033[95m",  # thread 4 --> Magenta
    5: "\033[96m",  # thread 5 --> Cyan
    6: "\033[97m",  # thread 6 --> White
    7: "\033[98m",  # thread 7 --> Bright black
    8: "\033[99m",  # thread 8 --> Bright red
    9: "\033[90m",  # thread 9 --> Dark gray
}
    

