import * as all from "cypress-cucumber-preprocessor/steps";

// Elements
const tbSearch = "input[name='q']";
const btnSearch = "input[name='btnK']";

all.When("I search for {string}", searchTerm => {
  cy.get(tbSearch).type(searchTerm).type('{enter}');
});

all.Then("I should see the results for {string}", searchTerm => {
  cy.contains(searchTerm);
});
