package model;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cfg.WebDriverConfig;
import page.page;
import org.openqa.selenium.support.ui.Select;

public class Model {

	WebDriver driver;
	Map<String, String> map;
	JavascriptExecutor js;

	/**
	 * Constructor
	 * 
	 * @throws Exception
	 */
	public Model() throws Exception {
		driver = WebDriverConfig.createLocalDriver("chrome");
		map = new HashMap<String, String>();
		js = (JavascriptExecutor) driver;
	}

	/**
	 * Open amazon page
	 */
	public void openPage() {
		driver.get("http://www.amazon.com");
	}

	/***
	 * Select category from dropdown in amazon webpage
	 * 
	 * @param category
	 *            - category name
	 */
	public void selectCategoryFromPage(String category) {
		Select dropdown = new Select(driver.findElement(page.SEARCH_DROPDOWN));
		dropdown.selectByVisibleText("Books");
	}

	/**
	 * Enter search text in search bar
	 * 
	 * @param text
	 *            - text to be searched
	 */
	public void enterSearchText(String text) {
		driver.findElement(page.SEARCH_BOX).sendKeys(text + Keys.ENTER);
	}

	/**
	 * gather all possible details about the item like
	 * title,editions,price,delivery,rating
	 * 
	 * @param itemno
	 *            - itemno for which details have to be fetched
	 */
	public void gatherDetails(int itemno) {
		WebElement item = driver.findElement(By.xpath(page.ITEM.replace("<itemno>", Integer.toString(itemno - 1))));
		js.executeScript("arguments[0].scrollIntoView()", item);
		getNameOfProduct(itemno);
		getAvailableEditions(itemno);
		getDeliveryDeatils(itemno);
		getPrimeDetails(itemno);
		getRatingsOfProduct(itemno);

	}

	/**
	 * Store details of ratings if present
	 * 
	 * @param itemno
	 */
	private void getRatingsOfProduct(int itemno) {
		try {
			WebElement element = driver
					.findElement(By.xpath(page.ITEM_RATING.replace("<itemno>", Integer.toString(itemno - 1))));
			storeDetails("Rating", element.getAttribute("innerText"));
		} catch (Exception e) {

		}
	}

	/**
	 * Store details regarding prime product
	 * 
	 * @param itemno
	 */
	private void getPrimeDetails(int itemno) {
		try {
			driver.findElement(By.xpath(page.ITEM_PRIME.replace("<itemno>", Integer.toString(itemno - 1)))).getText();
			storeDetails("Prime", "Yes");
		} catch (Exception e) {
			storeDetails("Prime", "No");
		}

	}

	/**
	 * Store delivery details
	 * 
	 * @param itemno
	 */
	private void getDeliveryDeatils(int itemno) {
		WebElement item = driver
				.findElement(By.xpath(page.ITEM_DELIVERY.replace("<itemno>", Integer.toString(itemno - 1))));
		storeDetails("Delivery by", item.getText());

	}

	/**
	 * Store details about available editions and its corresponding price
	 * 
	 * @param itemno
	 */
	private void getAvailableEditions(int itemno) {
		List<WebElement> elements = driver
				.findElements(By.xpath(page.EDITIONS.replace("<itemno>", Integer.toString(itemno - 1))));
		Iterator<WebElement> iter = elements.iterator();
		int counter = 0;
		while (iter.hasNext()) {
			WebElement element = iter.next();
			storeDetails(element.getAttribute("data-attribute"), getPriceOfProduct(itemno, counter));
			counter++;
		}
	}

	/**
	 * Get info on price for particular edition
	 * 
	 * @param itemno
	 * @param counter
	 * @return
	 */
	private String getPriceOfProduct(int itemno, int counter) {
		List<WebElement> currencyElements = driver
				.findElements(By.xpath(page.ITEM_PRICE_CURRENCY.replace("<itemno>", Integer.toString(itemno - 1))));
		List<WebElement> wholeElements = driver
				.findElements(By.xpath(page.ITEM_PRICE_WHOLE.replace("<itemno>", Integer.toString(itemno - 1))));
		List<WebElement> fractionalElements = driver
				.findElements(By.xpath(page.ITEM_PRICE_FRACTIONAL.replace("<itemno>", Integer.toString(itemno - 1))));
		return currencyElements.get(counter).getText() + wholeElements.get(counter).getText() + "."
				+ fractionalElements.get(counter).getText();
	}

	/**
	 * Get title of the product
	 * 
	 * @param itemno
	 */
	private void getNameOfProduct(int itemno) {
		WebElement item = driver
				.findElement(By.xpath(page.ITEM_NAME.replace("<itemno>", Integer.toString(itemno - 1))));
		System.out.println(
				"----------------------------------------------------------------------------------------------------------------------------\n");
		System.out.println("Title: " + item.getAttribute("data-attribute"));
		System.out.println(
				"----------------------------------------------------------------------------------------------------------------------------\n");
	}

	/**
	 * Store details passed in a map as key value pair
	 * 
	 * @param key
	 * @param value
	 */
	private void storeDetails(String key, String value) {
		map.put(key, value);
	}

	/**
	 * Display all details stored in the map about the product
	 */
	public void displayDetails() {
		for (Map.Entry<String, String> entry : map.entrySet()) {
			System.out.format("|%15s|%30s|\n", entry.getKey(), entry.getValue());
			System.out.println("--------------------------------------------------");
		}

	}

}
