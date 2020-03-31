class HomePage {
  tbSearch = "input[name='q']";
  url = "https://www.google.com/"
  
  visit(url) {
    cy.visit(url);
  }

  getUrl() {
    return cy.url();
  }
  
  searchFor(text) {
    cy.get(this.tbSearch)
      .type(text)
      .type("{enter}");
  }

  checkForSearch(text) {
    cy.contains(text);
  }
}

export default HomePage;
