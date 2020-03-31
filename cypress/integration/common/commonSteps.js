import * as all from "cypress-cucumber-preprocessor/steps";

// common
const url = "https://www.google.com";

all.Given("I visit the Google Home Page", () => {
  cy.visit(url)
    .url()
    .should("include", url);
});
