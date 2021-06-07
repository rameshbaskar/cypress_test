import * as HomePage from '../lib/pages/homePage';

describe('user', () => {
  before(function () {
    cy.visit('https://www.google.com');
  });

  // This test intentionaly fails to demonstrate the reporting
  it('should be able to visit the home page', function () {
    cy.log('This test intentionaly fails to demonstrate the reporting and attaching of screenshots!');
    cy.url().should('contain', 'gogle.com');
  });

  it('should be able to search for a term', function () {
    HomePage.search('Cypress');
    cy.contains('www.cypress.io').should('not.be.undefined');
  });
});
