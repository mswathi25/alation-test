package page;

import org.openqa.selenium.By;

public class page {

	public static final By SEARCH_DROPDOWN = By.className("nav-search-dropdown");
	public static final By SEARCH_BOX =By.id("twotabsearchtextbox");
	public static final String ITEM_NAME="//li[@id=\"result_<itemno>\"]//h2";
	public static final String EDITIONS="//li[@id=\"result_<itemno>\"]//h3";
	public static final String ITEM ="//div[@id='atfResults']//li[@id='result_<itemno>']//div[@class='s-item-container']";
	public static final String ITEM_PRICE_CURRENCY = ITEM+"//*[@class='sx-price-currency']";
	public static final String ITEM_PRICE_WHOLE = ITEM+"//*[@class='sx-price-whole']";
	public static final String ITEM_PRICE_FRACTIONAL = ITEM+"//*[@class='sx-price-fractional']";
	public static final String ITEM_DELIVERY = ITEM+"//span[@class='a-color-success a-text-bold']";
	public static final String ITEM_PRIME=ITEM+"//i[@class='a-icon a-icon-prime a-icon-small s-align-text-bottom']//span";
	public static final String ITEM_RATING=ITEM+"//i//span[contains(text(),\"out of\")]";
}
