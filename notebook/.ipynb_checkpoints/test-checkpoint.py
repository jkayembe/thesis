import pandas as pd # For data wrangling
import requests # For HTTP Requests to the API
import seaborn as sns # For charts

URL = '/home/jason/memoire'

data = requests.get('http://api.green-coding.internal:9142/v1/runs').json()

runs = pd.DataFrame.from_dict(data['data'])

print(runs)

# df = pd.DataFrame.from_dict(data["data"])

# # Set the column names according to the API specification
# df.columns = ["project_id", "detail_name", "time", "metric", "value", "unit"]

