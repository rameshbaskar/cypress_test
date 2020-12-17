export function clickOn(locator) {
  cy.get(locator).click();
}

export function typeInto(locator, text) {
  cy.get(locator).clear().type(text);
}

export function typeIntoAndSubmit(locator, text) {
  cy.get(locator).clear().type(text).type("{enter}");
}

export function selectFrom(locator, text) {
  cy.get(locator).select(text);
}

export function uploadFile(locator, fileName) {
  cy.get(locator).attachFile(fileName); // fileName should be present in cypress/fixtures folder
}

export function shouldBeVisible(locator) {
  cy.get(locator).should("be.visible");
}

export function shouldHaveExactText(locator, text) {
  cy.get(locator).should("have.text", text);
}

export function shouldContainText(locator, text) {
  cy.get(locator).should("contain.text", text);
}

export function shouldHaveAttribute(locator, attrName, attrValue) {
  cy.get(locator).should("have.attr", attrName, attrValue);
}

export function shouldHaveValue(locator, text) {
  cy.get(locator).should("have.value", text);
}

export function shouldHaveContent(text) {
  cy.contains(text).should("not.be.undefined");
}
