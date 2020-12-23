import * as homePage from "./pages/homePage";

describe("user", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com");
  });

  // This test intentionaly fails to demonstrate the reporting
  it("should be able to visit the home page", () => {
    cy.log("This test intentionaly fails to demonstrate the reporting and attaching of screenshots!");
    cy.url().should("contain", "gogle.com");
  });

  it("should be able to search for a term", () => {
    homePage.search("Cypress");
    homePage.verifySearch("www.cypress.io");
  });
})
