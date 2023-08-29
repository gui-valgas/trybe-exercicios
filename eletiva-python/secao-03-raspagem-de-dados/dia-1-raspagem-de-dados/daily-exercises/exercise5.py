import requests
from parsel import Selector

BASE_URL = "http://books.toscrape.com/catalogue/"
response = requests.get(
    'http://books.toscrape.com/catalogue/the-grand-design_405/index.html'
    )
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()

price = selector.css(
    ".product_main .price_color::text"
  ).re_first(r"\d*\.\d{2}")

description = selector.css('#product_description ~ p::text').get()
if description.endswith('...more'):
    description = description[:-len('...more')]

img = BASE_URL + selector.css("#product_gallery img::attr(src)").get()

availability = selector.css(".product_main .availability::text").re_first("\d")

print(title, price, description, img, availability, sep=" ,")
