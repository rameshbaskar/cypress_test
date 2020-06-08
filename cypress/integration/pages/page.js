export default class Page {
  constructor() {}

  log(message) {
    cy.log(message);
  }

  clickOn(locator) {
    cy.get(locator).click();
  }

  typeInto(locator, text) {
    cy.get(locator).clear().type(text);
  }

  typeIntoAndSubmit(locator, text) {
    cy.get(locator).clear().type(text).type('{enter}');
  }

  selectFrom(locator, text) {
    cy.get(locator).select(text);
  }

  uploadFile(locator, fileName) {
    cy.get(locator).attachFile(fileName); // fileName should be present in cypress/fixtures folder
  }

  shouldBeVisible(locator) {
    cy.get(locator).should('be.visible');
  }

  shouldHaveExactText(locator, text) {
    cy.get(locator).should('have.text', text);
  }

  shouldContainText(locator, text) {
    cy.get(locator).should('contain.text', text);
  }

  shouldHaveAttribute(locator, attrName, attrValue) {
    cy.get(locator).should('have.attr', attrName, attrValue);
  }

  shouldHaveValue(locator, text) {
    cy.get(locator).should('have.value', text);
  }

  shouldHaveContent(text) {
    cy.contains(text).should('not.be.undefined');
  }
}
