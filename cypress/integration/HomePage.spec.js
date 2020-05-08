import HomePage from './pages/homePage';
import { visitUrl, pageShouldHaveContent } from './utils/commonFunctions';

const homePage = new HomePage();

describe('user', () => {
  beforeEach(() => {
    visitUrl('https://www.google.com/');
  });

  // This test intentionaly fails to demonstrate the reporting
  it('should be able to visit the home page', () => {
    cy.url().should('contain', 'goggle.com');
  });

  it('should be able to search for a term', () => {
    homePage.search('Cypress');
    pageShouldHaveContent('www.cypress.io');
  });
})
