import * as Page from './page';

// Elements
const tbSearch = `input[name='q']`;

// Functions
export function search(text) {
  cy.log(`HomePage: Search for text: ${text}`);
  Page.typeAndSubmit(tbSearch, text);
}
