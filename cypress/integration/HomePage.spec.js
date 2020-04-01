import HomePage from './pages/homePage';

const homePage = new HomePage();

describe('user', () => {

  it('should be able to visit the home page', () => {
    homePage.visit('https://www.google.com/');
    homePage.getUrl().should('include', 'www.google.com');
  });

  it('should be able to search for a term', () => {
    homePage.visit('https://www.google.com/');
    homePage.searchFor('Cypress');
    homePage.checkForSearch('www.cypress.io');
  })
})
