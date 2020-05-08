export default class HomePage {
  constructor() {
    this.tbSearch = 'input[name="q"]';
  }

  search(text) {
    cy.get(this.tbSearch).type(text).type('{enter}');
  }
}
