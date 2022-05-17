const APPLY_BUTTON = '';
const LOGIN_TO_APPLY_BUTTON = '';
const ALREADY_APPLIED_BUTTON = '';

export function visit(jobUuid) {
  cy.get(`/job/${jobUuid}`);
}

export function verifyLoginToApply() {
  cy.get(LOGIN_TO_APPLY_BUTTON).should('exist');
}

export function verifyCanApply() {
  cy.get(APPLY_BUTTON).should('exist');
}

export function verifyAlreadyApplied() {
  cy.get(ALREADY_APPLIED_BUTTON).should('exist');
}

export function captureViewJobClickstreamApi() {
  cy.intercept('POST', '**/v2/analytics/clickstream', (req) => {
    if (req.body.eventType === 'view') {
      req.alias = 'VIEW_JOB_CLICKSTREAM_API_ALIAS';
      req.continue();
    }
  });
}

export function verifyViewJobClickstreamEvent(jobUuid) {
  captureViewJobClickstreamApi();
  visit(jobUuid);
  cy.wait('@VIEW_JOB_CLICKSTREAM_API_ALIAS').then((interception) => {
    
  });
}