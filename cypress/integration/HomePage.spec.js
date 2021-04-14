import * as HomePage from '../lib/pages/homePage';
import * as CommonFunctions from '../lib/utils/commonFunctions';

describe('user', () => {
  beforeEach(function () {
    CommonFunctions.visit('https://www.google.com');
  });

  // This test intentionaly fails to demonstrate the reporting
  it('should be able to visit the home page', function () {
    cy.log('This test intentionaly fails to demonstrate the reporting and attaching of screenshots!');
    CommonFunctions.verifyUrlContains('gogle.com');
  });

  it('should be able to search for a term', function () {
    HomePage.search('Cypress');
    HomePage.verifySearch('www.cypress.io');
  });
})
