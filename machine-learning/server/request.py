import requests

url='http://localhost:5000/api'

r =requests.post(url,json={'exp':[56.7,6]})
print(r.json())