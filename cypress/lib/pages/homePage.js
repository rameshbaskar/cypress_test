// Elements
const tbSearch = `input[name='q']`;

// Functions
export function search(text) {
  cy.log(`HomePage: Search for text: ${text}`);
  cy.get(tbSearch).clear().type(`${text}{enter}`);
}
