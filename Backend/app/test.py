import requests
import numpy as np

url = "http://127.0.0.1:5000/api"

# Convert the NumPy array to a Python list
data = {"data": [11.58, 2.0, 2.0, 5.0, 1.0, 1.0, 0.0, 0.0, 1.0, 54.0, 133.0, 91.0, 105.0, 120.0, 80.0]}

response = requests.post(url, json=data)

print(response.text)
