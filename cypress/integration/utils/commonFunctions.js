export function visitUrl(url) {
  cy.log(`Visiting url: ${url}`);
  cy.visit(url);
}

export function pageShouldHaveContent(text) {
  cy.log(`Checking if page contains text: ${text}`);
  cy.contains(text).should('not.be.undefined');
}

export function pageShouldHaveElement(locator) {
  cy.log(`Checking if page contains element identified by: ${locator}`);
  findElement(locator).should('not.be.undefined');
}

export function fillText(locator, text) {
  cy.log(`Filling text: ${text} into element identified by: ${locator}`);
  findElement(locator).type(text);
}

export function fillAndSubmit(locator, text) {
  cy.log(`Filling text: ${text} into element identified by: ${locator} and then submitting`);
  findElement(locator).type(text).type('{enter}');
}

export function click(locator) {
  cy.log(`Clicking on element identified by: ${locator}`);
  findElement(locator).click();
}

export function findElement(locator) {
  cy.log(`Fetching element in the page using locator: ${locator}`);
  return cy.get(locator);
}
