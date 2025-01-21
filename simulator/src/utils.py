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
# ******************************************************************************************************
# *****                                                                                            *****
# *****   This section overrides the builtins.print function. This is done so that each thread     *****
# *****   is assigned a distinct color when it prints. To use this functionality :                 *****
# *****      - Import utils and utils.THREAD_LOCAL_STORAGE                                         *****
# *****      - Each thread target function must do :                                               *****
# *****                            THREAD_LOCAL_STORAGE.color = ANSI Color escape code             *****
# *****                            THREAD_LOCAL_STORAGE.name = "thread name displayed in output"   *****
# *****                                                                                            *****
# ******************************************************************************************************

# Creates a local storage for threads
THREAD_LOCAL_STORAGE = threading.local()

# Defines a per-thread customised print function
def print_colored(*objects, sep=' ', end='\n', file=None, flush=False):
    '''
    This variant of print use different colors for each thread
    '''
    # Get the thread name and color (default : color = white, name = "[MAIN THREAD])
    color = THREAD_LOCAL_STORAGE.color if hasattr(THREAD_LOCAL_STORAGE, 'color') else "\033[97m"  # White
    name = THREAD_LOCAL_STORAGE.name if hasattr(THREAD_LOCAL_STORAGE, 'name') else "[MAIN THREAD]"
    
    # Build the message with the appropriate color
    text = sep.join(map(str, objects))
    timestamp_str = ""
    if IS_MEASURED :
        current_time = int(time.time()*1000000)
        timestamp_str = f"{current_time} "
    message =  timestamp_str + color + '[THREAD ' + name + '] :: ' + text + "\033[0m"
    
    # Write the message directly to stdout
    if file is None:
        file = sys.stdout
    file.write(message + end)
    if flush:
        file.flush()
 
#Overrides the builins print function
builtins.print = print_colored

# ******************************************************************************************************
# ******************************************************************************************************

def handle_arguments():
    '''
    This function handles arguments passed to the script
    Usage : scenario.py path_to_scenario.json
    scenario.json should contain the parameters for each scenario.
    I.E.:
    scenario.json =
    {
        "scenario 1": {
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
        },
        
        "scenario 2": {
            USER: "Jason Kayembe",
            USER_PASSWORD: "Azerty.123",
            DOMAIN : ".ulb.test@gmail.com",
            CONTACTS: [
                "jason.kayembe.ulb.test3@outlook.com",
                "jason.kayembe@hotmail.com"
            ],   
            PROVIDER: GMAIL,
            BROWSER: CHROME,
            ADBLOCK:"true",
            UNTRACKED:"true",   
            TIME_LIMIT: 1,
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

    scenarios_parameters = []

    for scenario_name, scenario_data in scenarios.items():
        user = scenario_data[USER]
        user_address = ".".join([n.lower() for n in scenario_data[USER].split(" ")]) + scenario_data[DOMAIN]
        user_psw = scenario_data[USER_PASSWORD]
        contacts = scenario_data[CONTACTS]
        provider = scenario_data[PROVIDER]
        browser = scenario_data[BROWSER]
        adblock = scenario_data[ADBLOCK]
        untracked = scenario_data[UNTRACKED]
        time_limit = scenario_data[TIME_LIMIT]
        login = scenario_data[LOGIN]
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
            login = int(login)
            n_mail_to_read_and_answer = int(n_mail_to_read_and_answer)
            n_mail_to_read_and_delete = int(n_mail_to_read_and_delete)
            n_mail_to_send = {int(size): int(count) for size, count in n_mail_to_send.items()}
            
            # Validate input
            for size, count in n_mail_to_send.items():
                if size not in [0, 5, 10, 15, 20, 25] or count < 0:
                    raise ValueError
            
            if time_limit < 0 or n_mail_to_read_and_answer < 0 or n_mail_to_read_and_delete < 0 or login < 0:
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

        scenario_params = (user, user_address, user_psw, contacts, provider, browser, adblock == 'true', untracked == 'true',
                           time_limit, login, n_mail_to_send, n_mail_to_read_and_answer, n_mail_to_read_and_delete)
        scenarios_parameters.append(scenario_params)

    return scenarios_parameters

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
