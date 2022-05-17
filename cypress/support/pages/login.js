const NRIC_INPUT = '';
const LOGIN_BUTTON = '';

export function visit() {
  cy.get('/login');
}

export function login(nric) {
  visit();
  cy.get(NRIC_INPUT).type(nric);
  cy.get(LOGIN_BUTTON).click();
  // waitForLoginGrowlToDisappear;
}

export function logout() {
  
}