export function click(locator) {
  cy.log(`Click on element: ${locator}`);
  cy.get(locator)
    .click();
}

export function type(locator, text) {
  cy.log(`Type text: ${text} into element: ${locator}`);
  cy.get(locator)
    .clear()
    .type(text);
}

export function typeAndSubmit(locator, text) {
  cy.log(`Type text: ${text} into element: ${locator} and submit`);
  cy.get(locator)
    .clear()
    .type(`${text}{enter}`);
}

export function select(locator, text) {
  cy.log(`Select item: ${text} from dropdown: ${locator}`);
  cy.get(locator)
    .select(text);
}

export function uploadFile(locator, fileName) {
  cy.log(`Upload file: ${fileName} from fixtures folder using element: ${locator}`);
  cy.get(locator)
    .attachFile(fileName); // fileName should be present in cypress/fixtures folder
}

export function elementShouldBeVisible(locator) {
  cy.log(`Verify if the element: ${locator} is visible`);
  cy.get(locator)
    .should('be.visible');
}

export function elementShouldHaveExactText(locator, text) {
  cy.log(`Verify if element: ${locator} has exact text: ${text}`);
  cy.get(locator)
    .should('have.text', text);
}

export function elementShouldHaveText(locator, text) {
  cy.log(`Verify if element: ${locator} contains text: ${text}`);
  cy.get(locator)
    .should('contain.text', text);
}

export function elementShouldHaveAttribute(locator, attrName, attrValue) {
  cy.log(`Verify if element: ${locator} has attribute: ${attrName} with value: ${attrValue}`);
  cy.get(locator)
    .should('have.attr', attrName, attrValue);
}

export function elementShouldHaveValue(locator, value) {
  cy.log(`Verify if element: ${locator} has value: ${value}`);
  cy.get(locator)
    .should('have.value', value);
}

export function pageShouldHaveText(text) {
  cy.log(`Verify if page has text: ${text}`);
  cy.contains(text)
    .should('not.be.undefined');
}

export function visit(url) {
  cy.log(`Visit URL: ${url}`);
  cy.visit(url);
}

export function urlShouldHavePath(path) {
  cy.log(`Verify if the current url contains text: ${path}`);
  cy.url()
    .should('contain', path);
}
