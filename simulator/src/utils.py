# standard libraries
import math
import random
import time
import sys
import re
import builtins
import threading
import json

# local imports
from constants import *


# Defines a per-thread customised print function
def GMT_print(*objects, sep=' ', end='\n', file=None, flush=False):
    '''
    This variant of print Add the timestamp at the frontend of each print so the GMT can place the logs on the graphs
    '''

    # Build the message with the appropriate color
    text = sep.join(map(str, objects))

    # Color settings for different keywords
    if "START" in text or "END" in text:
        # Green for "START" or "END"
        text = f"\033[32m{text}\033[0m"
    elif "[INFO]" in text:
        # Yellow for "[INFO]"
        text = f"\033[33m{text}\033[0m"
    elif "ERROR" in text:
        # Red for "ERROR"
        text = f"\033[31m{text}\033[0m"
    elif "DEBUG" in text:
        # Orange (approximation) for "DEBUG"
        text = f"\033[38;5;214m{text}\033[0m"

    timestamp_str = ""
    if IS_MEASURED :
        current_time = int(time.time()*1000000)
        timestamp_str = f"{current_time} "
    message =  timestamp_str + text
    
    # Write the message directly to stdout
    if file is None:
        file = sys.stdout
    file.write(message + end)
    if flush:
        file.flush()
 
#Overrides the builins print function
builtins.print = GMT_print

# ******************************************************************************************************
# ******************************************************************************************************

def handle_arguments():
    '''
    This function handles arguments passed to the script
    Usage : scenario.py path_to_scenario.json
    scenario.json should contain the parameters for the scenario.
    I.E.:
    scenario.json =
    {
        "scenario": {
            USER: "Jason Kayembe",
            USER_PASSWORD: "Azerty123",
            DOMAIN : ".ulb.test3@outlook.com",
            CONTACTS: [
                "jason.kayembe.ulb.test@gmail.com",
            ],   
            PROVIDER: OUTLOOK,
            BROWSER: CHROME,
            ADBLOCK:"false",
            UNTRACKED:"false",
            TIME_LIMIT: 100,
            LOGIN: 100,
            N_MAIL_SENT: {
                0: 1,   # 1 email without attachment
                5: 1,   # 1 email with 5MB attachment
                10: 0,  # 0 emails with 10MB attachment
                15: 0,  # 0 emails with 15MB attachment
                20: 0,  # 0 emails with 20MB attachment
                25: 0   # 0 emails with 25MB attachment
            },
            N_MAIL_READ_AND_ANSWER: 0,
            N_MAIL_READ_AND_DELETE: 0
        }
    }
    '''
    
    if len(sys.argv) == 2:
        # Assume sys.argv[1] is the JSON file
        scenario_file = sys.argv[1]
        with open(scenario_file, 'r') as f:
            scenarios = json.load(f)
    elif len(sys.argv) == 1:
        # Use default scenario
        scenarios = SCENARIOS
    else:
        print("Usage: python script.py ['path/to/scenario.json']")
        sys.exit(1)



    # Get the only scenario in the file
    scenario_name, scenario_data = list(scenarios.items())[0]

    user = scenario_data[USER]
    user_address = ".".join([n.lower() for n in scenario_data[USER].split(" ")]) + scenario_data[DOMAIN]
    user_psw = scenario_data[USER_PASSWORD]
    contacts = scenario_data[CONTACTS]
    provider = scenario_data[PROVIDER]
    browser = scenario_data[BROWSER]
    adblock = scenario_data[ADBLOCK]
    untracked = scenario_data[UNTRACKED]
    pgp = scenario_data[PGP]
    time_limit = scenario_data[TIME_LIMIT]
    n_session = scenario_data[N_SESSION]
    n_mail_to_send = scenario_data[N_MAIL_SENT]
    n_mail_to_read_and_answer = scenario_data[N_MAIL_READ_AND_ANSWER]
    n_mail_to_read_and_delete = scenario_data[N_MAIL_READ_AND_DELETE]
    
    # Validate input
    try:
                    
        # Validate n_mail_to_send dictionary
        if not isinstance(n_mail_to_send, dict):
            raise ValueError("N_MAIL_TO_SEND must be a dictionary.")
        
        # Ensure numbers are treated as int
        time_limit = int(time_limit*60)
        n_session = int(n_session)
        n_mail_to_read_and_answer = int(n_mail_to_read_and_answer)
        n_mail_to_read_and_delete = int(n_mail_to_read_and_delete)
        n_mail_to_send = {int(size): int(count) for size, count in n_mail_to_send.items()}
        
        # Validate input
        for size, count in n_mail_to_send.items():
            if size not in [0, 5, 10, 15, 20, 25] or count < 0:
                raise ValueError
        
        if time_limit < 0 or n_mail_to_read_and_answer < 0 or n_mail_to_read_and_delete < 0 or n_session < 0:
            raise ValueError
        
    except ValueError:
        print("Invalid scenario parameters: TIME_LIMIT, LOGIN, N_MAIL_READ_AND_ANSWER, and N_MAIL_READ_AND_DELETE must be integers >= 0, "
                "N_MAIL_TO_SEND must be a dictionary with valid sizes (0, 5, 10, 15, 20, 25) "
                "and non-negative counts.")
        sys.exit(1)

    if provider not in PROVIDERS:
        print(f"Invalid scenario parameter PROVIDER: Must be {' or '.join([p for p in PROVIDERS])}.")
        sys.exit(1)
    if browser not in BROWSERS:
        print(f"Invalid scenario parameter BROWSER: Only {' or '.join([b for b in BROWSERS])} is supported.")
        sys.exit(1)
    if adblock not in ['true', 'false']:
        print(f"Invalid scenario parameter ADBLOCK: Must be 'true' or 'false.")
        sys.exit(1)
    if untracked not in ['true', 'false']:
        print(f"Invalid scenario parameter UNTRACKED: Must be 'true' or 'false.")
        sys.exit(1)
    if pgp not in ['true', 'false']:
        print(f"Invalid scenario parameter PGP: Must be 'true' or 'false.")
        sys.exit(1)

    scenario_params = ( user,
                        user_address,
                        user_psw,
                        contacts,
                        provider,
                        browser,
                        adblock == 'true',
                        untracked == 'true',
                        pgp == 'true',
                        time_limit,
                        n_session,
                        n_mail_to_send,
                        n_mail_to_read_and_answer,
                        n_mail_to_read_and_delete)
    
    return scenario_params

def select_evenly_spaced_moments(start, end, n):
    '''
    Selects n evenly spaced moments in the time range [start - end]
    '''
    if n <= 1:
        return [start] if n == 1 else []
    
    step = (end - start) / (n - 1)
    moments = [start + i * step for i in range(n)]
    return moments

def extract_unique_id(text):
    '''
    This function looks for a number between bracket in the text
    '''
    # Define the pattern to match number between square brackets
    pattern = r'\[(\d+)\]'
    
    # Use re.findall to find all matches of the pattern in the text
    matches = re.findall(pattern, text)
    
    # Return the last match (if any) (last because in conversations, the number of msg is also beween brackets)
    if matches:
        return int(matches[-1])
    else:
        return None
