import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/homePage";

const homePage = new HomePage();

Given("I visit the Google Home Page", () => {
  homePage.visit("https://www.google.com/");
  homePage.getUrl().should("include", "www.google.com");
});

When("I search for {string}", searchTerm => {
  homePage.searchFor(searchTerm);
});

Then("I should see the results for {string}", searchTerm => {
  homePage.checkForSearch(searchTerm);
});
