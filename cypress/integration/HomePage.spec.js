import HomePage from './pages/homePage';

context('user', () => {
  homePage = new HomePage();

  it('should be able to visit the home page', () => {
    homePage.visit('https://www.google.com/');
    homePage.getUrl().contains('www.google.com');
  });

  it('should be able to search for a term', () => {
    homePage.visit('https://www.google.com/');
    homePage.searchFor('Cypress');
    homePage.checkForSearch('www.cypress.io');
  })
})
