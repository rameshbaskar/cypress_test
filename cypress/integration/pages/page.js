class Page {
  constructor() {}

  visit(url) {
    cy.visit(url);
  }

  getUrl() {
    return cy.url();
  }

  hasContent(text) {
    return cy.contains(text) != null;
  }

  hasElement(locator) {
    return cy.get(locator) != null;
  }
}

module.exports = Page;
