import requests

response = requests.get("https://api.github.com/users")
users = response.json()

for item in users:
    username = item['login']
    url = item['url']
    print(username, url)
