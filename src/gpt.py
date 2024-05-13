from openai import OpenAI
import openai
import csv
import os

from constants import (
    
    GPT_MODEL,
    API_KEY,
    TEMPERATURE,
    NUM_EMAILS_PER_INTEREST,
    CONTENT_LENGTH,
    
    
    EMAILS_FOLDER,
    EMAILS_CSV,
    ANSWERS_CSV,
    UNIQUE_ID_COL,
    SUBJECT_COL,
    CONTENT_COL,
    ANSWER_COL,
    
    )


# Constants


# List of users and their interests
users = {
    "Jason Kayembe": [
        "Basketball",
        "Fan de Jazz, Herbie Hancock, Miles Davis, Yussef Dayes",
        "Ingenieur Computer Science",
        "Les Gauffres",
        "La musique"
    ],
    "Martin Dupon": [
        "English Soccer",
        "Travel",
        "NGO Volunteering",
        "Rock Albums",
        "Comics"
    ],
    "Felix Horta": [
        "Investing",
        "Luxury Travel",
        "Digital Assets",
        "Video Games",
        "Automobile"
    ],
    "Marie Hupin": [
        "Novels and Poetry",
        "Human Behavior",
        "Museums",
        "Writing",
        "Mental Health"
    ],
    "Zelie Hoelaert": [
        "Medical Research",
        "Fitness",
        "Health Education",
        "Volunteering",
        "Sustainability"
    ]
}

# Initialize the OpenAI client
client = OpenAI(api_key=API_KEY)

def generate_email(user, interest):
  
    prompt = f" You are writing an email from {user} to a friend talking about {interest}.\
                Your goal is to invent some random story or fact or discovery about {interest}. \
                Sign as {user} and dont use any brackets or unresolved argument in your response. \
                Also, output only the mail. The mail should be {CONTENT_LENGTH} characters long. Be as most creative as you can."
    
    response = client.chat.completions.create(
        model = GPT_MODEL,
        messages = [
            #{"role": "system", "content": ""},
            {"role": "user", "content": prompt}
        ],
        temperature = TEMPERATURE,
        max_tokens = CONTENT_LENGTH,  # Adjusted to limit the response to 300 characters
        top_p = 1
    )
    return response.choices[0].message.content

def generate_email_subject(email):
    prompt = f"Find a good subject for this email. Output only the subject \
                and dont use any brackets or unresolved argument in your response. \n\n {email}]"
    
    response = client.chat.completions.create(
        model = "gpt-3.5-turbo",
        messages = [
            #{"role": "system", "content": ""},
            {"role": "user", "content": prompt}
        ],
        temperature = TEMPERATURE,
        max_tokens = CONTENT_LENGTH,  # Adjusted to limit the response to 300 characters
        top_p = 1
    )
    return response.choices[0].message.content

def generate_answer(user, interest, email):
    prompt = f"Write an answer to {user}'s email The answer must be {CONTENT_LENGTH} \
                characters long. Be very passionate and creative in your response.\
                Also, only output the mail and dont use any bracket or unresolved argument in your response: \n\n {email}."
    
    response = client.chat.completions.create(
        model = GPT_MODEL,
        messages = [
            #{"role": "system", "content": ""},
            {"role": "user", "content": prompt}
        ],
        temperature = TEMPERATURE,
        max_tokens = CONTENT_LENGTH,  # Adjusted to limit the response to 300 characters
        top_p = 1
    )
    return response.choices[0].message.content

def generate_data(user):
    # relative file path (relative to script dir)
    firstname, surname = user.split(' ')
    email_csv_file_path = EMAILS_FOLDER + firstname.lower() + "_" + surname.lower() + EMAILS_CSV
    answer_csv_file_path = EMAILS_FOLDER + firstname.lower() + "_" + surname.lower() + ANSWERS_CSV
    # abslute script dir
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # absolute file path
    email_csv_file_path = os.path.join(script_dir, email_csv_file_path)
    answer_csv_file_path = os.path.join(script_dir, answer_csv_file_path)
    # Create the directories if they don't exist
    os.makedirs(os.path.dirname(email_csv_file_path), exist_ok=True)
    os.makedirs(os.path.dirname(answer_csv_file_path), exist_ok=True)


    with open(email_csv_file_path, 'w', newline='', encoding='utf-8') as email_file, \
         open(answer_csv_file_path, 'w', newline='', encoding='utf-8') as answer_file:

        email_writer = csv.writer(email_file)
        answer_writer = csv.writer(answer_file)

        email_writer.writerow([UNIQUE_ID_COL, SUBJECT_COL, CONTENT_COL])
        answer_writer.writerow([UNIQUE_ID_COL, ANSWER_COL])

        unique_id = 1

        for interest in users[user]:
            for _ in range(NUM_EMAILS_PER_INTEREST):
                email_content = generate_email(user, interest)
                email_subject = f"[{unique_id}] : " + generate_email_subject(email_content)
                answer_content = generate_answer(user, interest, email_content)

                email_writer.writerow([unique_id, email_subject, email_content])
                answer_writer.writerow([unique_id, answer_content])
                print(f"[INFO] : {unique_id} EMAIL-ANSWER Pair(s) written for : {user}")
                unique_id += 1


if __name__ == "__main__":
    #for user, interests in users:
        generate_data('Jason Kayembe')
