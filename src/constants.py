# Standard imports :
import os

# Set seed for reproducibility
SEED = int(os.environ.get("SEED", "321"))


# General constants :
PROTON = "proton"
OUTLOOK = "outlook"
PROVIDERS = [PROTON, OUTLOOK]
CHROME = "chrome"
BROWSERS = [CHROME,]

# Determines how many times the sessions functions
# are attempted (in case of failure) and the # of seconds between each attempts :
MAX_ATTEMPTS = 2
DELAY = 5  

# Determine interval between each action: lower value to fast the session
TIME_BETWEEN_ACTIONS = 2

# Keys for the Default arguments dictionnary :
USER = "USER"
USER_PASSWORD = "USER_PASSWORD"
PROVIDER = "PROVIDER"
BROWSER = "BROWSER"
TIME_LIMIT =  "TIME_LIMIT"
N_MAIL_SENT = "N_MAIL_SENT"
N_MAIL_READ = "N_MAIL_READ"
N_MAIL_ANSWERED = "N_MAIL_ANSWERED"
CONTACTS = "CONTACTS"
DOMAIN = "DOMAIN"

# Default arguments dicionnary for the scenarios :
SCENARIOS = {
    
    # "scenario 1": {
    #     USER: "Jason Kayembe",
    #     USER_PASSWORD: "Azerty123",
    #     DOMAIN : ".ulb.test4@proton.me",
    #     CONTACTS: [ 
    #         "jason.kayembe.ulb.test3@outlook.com",
    #     ],
                  
    #     PROVIDER: PROTON,
    #     BROWSER: CHROME,
    #     TIME_LIMIT: 2,
    #     N_MAIL_SENT: 0,
    #     N_MAIL_READ: 1,
    #     N_MAIL_ANSWERED: 1,
    # },
    
    "scenario 2": {
        USER: "Jason Kayembe",
        USER_PASSWORD: "Azerty123",
        DOMAIN : ".ulb.test3@outlook.com",
        CONTACTS: [
            "jason.kayembe.ulb.test4@proton.me",
        ],   
        PROVIDER: OUTLOOK,
        BROWSER: CHROME,
        TIME_LIMIT: 2,
        N_MAIL_SENT: 0,
        N_MAIL_READ: 1,
        N_MAIL_ANSWERED: 1
    }
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
    

