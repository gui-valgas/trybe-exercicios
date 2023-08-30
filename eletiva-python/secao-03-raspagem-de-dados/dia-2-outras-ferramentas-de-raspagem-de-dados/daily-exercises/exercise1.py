from selenium import webdriver
from selenium.webdriver.common.by import By


firefox = webdriver.Firefox()


def scrape(url):
    firefox.get(url)

    get_quote = (
            firefox.find_element(By.CLASS_NAME, "quote")
            .find_element(By.CLASS_NAME, "text")
            .get_attribute("innerHTML")
        )
    print(get_quote)


scrape("https://quotes.toscrape.com/")
