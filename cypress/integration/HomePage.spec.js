import * as homePage from "./pages/homePage";

describe("user", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com");
  });

  // This test intentionaly fails to demonstrate the reporting
  it("should be able to visit the home page", () => {
    cy.url().should("contain", "google.com");
  });

  it("should be able to search for a term", () => {
    homePage.search("Cypress");
    homePage.verifySearch("www.cypress.io");
  });
})
