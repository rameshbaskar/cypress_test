const HomePage = require('./pages/homePage');
const assert = require('assert');

const homePage = new HomePage();

describe('user', () => {
  beforeEach(() => {
    homePage.visit('https://www.google.com/');
  });

  it('should be able to visit the home page', () => {
    var url = homePage.getUrl();
    console.log(`URL: ${url}`);
    assert(url.includes('google.com'));
  });

  it('should be able to search for a term', () => {
    homePage.search('Cypress');
    assert(homePage.hasContent('www.cypress.io'));
  });
})
