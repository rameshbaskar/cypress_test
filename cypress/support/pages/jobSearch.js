const SEARCH_TERM_TEXT_BOX = '';
const MIN_SALARY_TEXT_BOX = '';
const EMP_TYPE_LIST_BOX = '';
const SEARCH_BUTTON = '';

export function captureJobSearchApi() {
  cy.intercept('POST', '**/v2/search').as('JOB_SEARCH_API_ALIAS');
}

export function captureSearchResultsClickstreamApi() {
  cy.intercept('POST', '**/v2/analytics/clickstream', (req) => {
    if (req.body.eventType === 'search') {
      req.alias = 'SEARCH_RESULTS_CLICKSTREAM_API_ALIAS';
      req.continue();
    }
  });
}

export function searchForJob(searchTerm = null, minSalary = null, employmentType = null) {
  cy.log('Search for a job');
  captureJobSearchApi();
  captureSearchResultsClickstreamApi();

  if (searchTerm !== null) {
    cy.get(SEARCH_TERM_TEXT_BOX)
      .type(searchTerm);
  }

  if (minSalary !== null) {
    cy.get(MIN_SALARY_TEXT_BOX)
      .type(minSalary);
  }

  if (employmentType !== null) {
    cy.get(EMP_TYPE_LIST_BOX)
      .select(employmentType);
  }

  cy.get(SEARCH_BUTTON)
    .click();
  cy.wait('@JOB_SEARCH_API_ALIAS');
}

export function verifySearchResultsClickstreamEvent(eventData) {
  cy.log('Verify the search results clickstream event');
  cy.wait('@SEARCH_RESULTS_CLICKSTREAM_API_ALIAS').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
    const reqBody = interception.request.body;
    expect(reqBody.eventLabel).to.equal(eventData.eventLabel);
    expect(reqBody.sourceUrl).to.equal(eventData.sourceUrl);
    expect(reqBody.sessionId).to.not.be.null;
  });
}