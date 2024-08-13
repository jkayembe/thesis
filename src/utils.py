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
from constants import (
    PROVIDER,
    BROWSER,
    DOMAIN,
    TIME_LIMIT,
    N_MAIL_SENT,
    N_MAIL_READ,
    N_MAIL_ANSWERED,
    PROVIDERS,
    BROWSERS,
    USER_PASSWORD,
    USER,
    SCENARIOS,
    CONTACTS,
    IS_MEASURED
    )
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
            'USER': "Jason Kayembe",
            'USER_PASSWORD': "Azerty123",
            'DOMAIN' : ".ulb.test4@proton.me",
            'CONTACTS': [ 
                "jason.kayembe.ulb.test3@outlook.com",
            ],
            'PROVIDER': PROTON,
            'BROWSER': CHROME,
            'TIME_LIMIT': 3,
            'N_MAIL_SENT': 1,
            'N_MAIL_READ': 3,
            'N_MAIL_ANSWERED': 2,
        },
        
        "scenario 2": {
            'USER': "Jason Kayembe",
            'USER_PASSWORD': "Azerty123",
            'DOMAIN': ".ulb.test3@outlook.com",
            'CONTACTS': [
                "jason.kayembe.ulb.test4@proton.me",
            ],   
            'PROVIDER': OUTLOOK,
            'BROWSER': CHROME,
            'TIME_LIMIT': 4, 
            'N_MAIL_SENT': 1,
            'N_MAIL_READ': 3,
            'N_MAIL_ANSWERED': 2
        },
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
        time_limit = scenario_data[TIME_LIMIT]
        n_mail_to_send = scenario_data[N_MAIL_SENT]
        n_mail_to_read = scenario_data[N_MAIL_READ]
        n_mail_to_answer = scenario_data[N_MAIL_ANSWERED]
        
        # Validate input
        try:
            #time_limit = math.ceil(time_limit)
            n_mail_to_send = int(n_mail_to_send)
            n_mail_to_read = int(n_mail_to_read)
            n_mail_to_answer = int(n_mail_to_answer)
            if time_limit < 0 or n_mail_to_send < 0 or n_mail_to_read < 0 or n_mail_to_answer < 0 or n_mail_to_answer > n_mail_to_read:
                raise ValueError
        except ValueError:
            print("Invalid scenario parameters : TIME_LIMIT, N_MAIL_SENT, N_MAIL_READ and \
                  N_MAIL_ANSWERED must be integers >= 0 and N_MAIL_READ >= N_MAIL_ANSWERED.")
            sys.exit(1)

        if provider not in PROVIDERS:
            print(f"Invalid scenario parameter PROVIDER : Must be {' or '.join([p for p in PROVIDERS])}.")
            sys.exit(1)
        if browser not in BROWSERS:
            print(f"Invalid scenario parameter BROWSER : Only {' or '.join([b for b in BROWSERS])} is supported.")
            sys.exit(1)

        scenario_params = (user, user_address, user_psw, contacts, provider, browser, 
                           time_limit, n_mail_to_send, n_mail_to_read, n_mail_to_answer)
        scenarios_parameters.append(scenario_params)

    return scenarios_parameters

def select_random_moments(start, end, n):
    '''
    selects n moments in the time range [sart - end]
    '''
    moments = random.sample(range(start, end + 1), n)
    return sorted(moments)

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
