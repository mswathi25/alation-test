package AlationTest.AlationTest;

import org.testng.annotations.BeforeSuite;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(tags = { "~@excluded" }, plugin = { "pretty", "html:target/cucumber",
		"testng:target/testng-results.xml", "json:target/cucumber-report.json" }, features = {
				"src/test/java/features/amazon.feature" }, glue = { "steps" }, monochrome = true)

public class AlationTest extends AbstractTestNGCucumberTests{
	@BeforeSuite
	public void setUp() throws Exception {
		
	}
}
