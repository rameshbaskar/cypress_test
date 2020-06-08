export function visitUrl(url) {
  cy.log(`Visiting url: ${url}`);
  cy.visit(url);
}

export function shouldHaveContent(text) {
  cy.log(`Checking if page contains text: ${text}`);
  cy.contains(text).should('not.be.undefined');
}

export function shouldHaveElement(locator) {
  cy.log(`Checking if page contains element identified by: ${locator}`);
  findElement(locator).should('not.be.undefined');
}

export function fillText(locator, text) {
  cy.log(`Filling text: ${text} into element identified by: ${locator}`);
  findElement(locator).type(text);
}

export function fillTextAndSubmit(locator, text) {
  cy.log(`Filling text: ${text} into element identified by: ${locator} and then submitting`);
  findElement(locator).type(text).type('{enter}');
}

export function click(locator) {
  cy.log(`Clicking on element identified by: ${locator}`);
  findElement(locator).click();
}

export function findElement(locator) {
  cy.log(`Fetching element in the page using locator: ${locator}`);
  var el = locator.startsWith('//') ? cy.xpath(locator) : cy.get(locator);
  return el;
}

export function uploadImage(locator, fileName) {
  cy.log('Attaching a file');
  cy.get(locator).attachFile(fileName); // File has to be present in the cypress/fixtures folder
}
