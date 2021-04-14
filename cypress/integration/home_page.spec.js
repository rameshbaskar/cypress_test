import * as HomePage from '../lib/pages/homePage';
import * as Page from '../lib/pages/page';

describe('user', () => {
  before(function () {
    Page.visit('https://www.google.com');
  });

  // This test intentionaly fails to demonstrate the reporting
  it('should be able to visit the home page', function () {
    cy.log('This test intentionaly fails to demonstrate the reporting and attaching of screenshots!');
    Page.verifyUrlContains('gogle.com');
  });

  it('should be able to search for a term', function () {
    HomePage.search('Cypress');
    Page.verifyPageHasText('www.cypress.io');
  });
});
