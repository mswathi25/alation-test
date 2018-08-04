package steps;

import context.context;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import model.Model;

public class AlationSteps {
	private static Model model = null;

	public AlationSteps() throws Exception {
		model = context.getModel();
	}

	@Given("^open Amazon webpage$")
	public void userOpenedPage() {
		model.openPage();
	}

	@And("^select the category ([^\"]*)$")
	public void userSelectCategory(String category) {
		model.selectCategoryFromPage(category);
	}

	@And("^enter search text ([^\"]*)$")
	public void userEnterSearchText(String text) {
		model.enterSearchText(text);
	}

	@And("^gather details about ([^\"]*) in search list$")
	public void gatherDeatilsaboutProduct(int itemno) {
		model.gatherDetails(itemno);
	}

	@And("^display gathered details about product$")
	public void displayGatheredDetails() {
		model.displayDetails();
	}

}
