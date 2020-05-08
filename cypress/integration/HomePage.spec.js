import HomePage from './pages/homePage';

const homePage = new HomePage();

describe('user', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/');
  });

  // This test intentionaly fails to demonstrate the reporting
  it('should be able to visit the home page', () => {
    cy.url().should('contain', 'goggle.com');
  });

  it('should be able to search for a term', () => {
    homePage.search('Cypress');
    cy.contains('www.cypress.io').should('not.be.undefined');
  });
})
