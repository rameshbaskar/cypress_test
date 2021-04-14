// Elements
const tbSearch = `input[name='q']`;

// Functions
export function search(text) {
  cy.log(`HomePage: Search for text: ${text}`);
  cy.get(tbSearch)
    .clear()
    .type(text)
    .type('{enter}');
}

export function verifySearch(text) {
  cy.log(`HomePage: Verify if text: ${text} is searched`);
  cy.contains(text).should('not.be.undefined');
}
