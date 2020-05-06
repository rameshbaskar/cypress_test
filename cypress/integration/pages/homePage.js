const Page = require('./page');

class HomePage extends Page {
  constructor() {
    super();
    this.tbSearch = 'input[name="q"]';
  }

  search(text) {
    cy.get(this.tbSearch).type(text).type('{enter}');
  }
}

module.exports = HomePage;
