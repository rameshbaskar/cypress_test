export function visit(url) {
  cy.log(`Visit URL: ${url}`);
  cy.visit(url);
}

export function verifyUrlContains(path) {
  cy.log(`Verify if the current url contains text: ${path}`);
  cy.url().should('contain', path);
}
