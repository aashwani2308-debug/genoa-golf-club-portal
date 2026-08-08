import os
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

BASE_URL = os.getenv("GGC_BASE_URL", "http://localhost:5173")

@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    options.add_argument("--window-size=1440,1000")
    d = webdriver.Chrome(options=options)
    yield d
    d.quit()

def test_home_page_loads(driver):
    driver.get(BASE_URL)
    assert "Genoa Golf Club" in driver.title
    heading = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.TAG_NAME, "h1"))
    )
    assert "premium golf experience" in heading.text.lower()

def test_venue_form_required_fields(driver):
    driver.get(f"{BASE_URL}/venue")
    submit = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, "button[type='submit']"))
    )
    submit.click()
    name = driver.find_element(By.NAME, "fullName")
    assert name.get_attribute("required") is not None

def test_mobile_menu(driver):
    driver.set_window_size(390, 844)
    driver.get(BASE_URL)
    menu = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "menu-button"))
    )
    menu.click()
    nav = driver.find_element(By.CLASS_NAME, "nav")
    assert "open" in nav.get_attribute("class")
