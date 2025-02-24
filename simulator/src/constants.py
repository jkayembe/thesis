# Standard imports :
import os

# Set seed for reproducibility
SEED = int(os.environ.get("SEED", "321"))


# General constants :
PROTON = "proton"
OUTLOOK = "outlook"
GMAIL = "gmail"
MY_SOLUTION = "my_solution"

PROVIDERS = [PROTON, OUTLOOK, GMAIL, MY_SOLUTION]
CHROME = "chrome"
BROWSERS = [CHROME,]


# Time Limits 

MAX_ATTEMPTS = 2            # Determines how many times the sessions functions are attempted (in case of failure)
DELAY = 1                   # Seconds between each attempts when functions fail
WAIT_LIMIT = 10             # Max time for Selenium to find an html element :
MAX_PAGE_LOAD_TIME = 40     # Max time for a webpage to load
TIME_PER_MB = 2             # Seconds to wait for 1MB of attached file to be uploaded
READING_TIME = 5            # Seconds to read a mail (Use 5 in real testing)
PAUSE_BTW_RUN = 5           # Seconds between different actions (Use 5 in real testing)
WAIT_AFTER_PAGE_LOADED = 5  # Seconds to wait after a page is loaded so that display stabalizes. (Use 5 in real testing)
MAILVELOPE_POPUP_WAIT_TIME = 2 # Max seconds to wait for Mailvelope credentials handling window to popup (Use 2)
DEFAULT_PAUSE_DELAY = 2    # Determine defult value of Session.pause() (Use 2)

# Keys for the Default arguments dictionnary :
USER = "USER"
USER_PASSWORD = "USER_PASSWORD"
PROVIDER = "PROVIDER"
BROWSER = "BROWSER"
ADBLOCK = "ADBLOCK"
UNTRACKED = "UNTRACKED"
PGP = "PGP"
TIME_LIMIT =  "TIME_LIMIT"
N_SESSION = 'N_SESSION'
N_MAIL_SENT = "N_MAIL_SENT"
N_MAIL_READ_AND_ANSWER = "N_MAIL_READ_AND_ANSWER"
N_MAIL_READ_AND_DELETE = "N_MAIL_READ_AND_DELETE"
CONTACTS = "CONTACTS"
DOMAIN = "DOMAIN"

# Default arguments dicionnary for the scenarios :
SCENARIOS = {
    
    "scenario": {
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
        PGP: "false",   
        TIME_LIMIT: 3,
        N_SESSION: 1,
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
EMAILS_FOLDER = "../emails_answers/"
ATTACHED_FILES = "../attached_files/"
ADBLOCK_FOLDER = "../ublock/"
PGP_FOLDER = "../mailvelope/chrome/"
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


