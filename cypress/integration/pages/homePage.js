// Elements
const tbSearch = "input[name='q']";

// Functions
export function search(text) {
  cy.get(tbSearch).clear().type(text).type("Enter");
}

export function verifySearch(text) {
  cy.contains(text).should('not.be.undefined');
}