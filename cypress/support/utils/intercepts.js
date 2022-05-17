export const DASHBOARD_RECOMMENDED_JOBS_API_ALIAS = 'DASHBOARD_RECOMMENDED_JOBS_API_ALIAS';
export const STUBBED_DASHBOARD_RECOMMENDED_JOBS_API_ALIAS = 'STUBBED_DASHBOARD_RECOMMENDED_JOBS_API_ALIAS';
export const JOB_APPLICATION_COUNT_GRAPHQL_API_ALIAS = 'JOB_APPLICATION_COUNT_GRAPHQL_API_ALIAS';
export const STUBBED_JOB_APPLICATION_COUNT_GRAPHQL_API_ALIAS = 'STUBBED_JOB_APPLICATION_COUNT_GRAPHQL_API_ALIAS';
export const JOB_SEARCH_API_ALIAS = 'JOB_SEARCH_API_ALIAS';
export const SEARCH_RESULTS_CLICKSTREAM_API_ALIAS = 'SEARCH_RESULTS_CLICKSTREAM_API_ALIAS';
export const VIEW_JOB_CLICKSTREAM_API_ALIAS = 'VIEW_JOB_CLICKSTREAM_API_ALIAS';
export const APPLY_JOB_CLICKSTREAM_API_ALIAS = 'APPLY_JOB_CLICKSTREAM_API_ALIAS';

export function captureDashboardRecommendedJobsApi() {
  cy.intercept('GET', '**/dashboardRecommendedJobs').as(DASHBOARD_RECOMMENDED_JOBS_API_ALIAS);
}

export function stubDashboardRecommendedJobsApi(response) {
  cy.intercept('GET', '**/dashboardRecommendedJobs', response).as(STUBBED_DASHBOARD_RECOMMENDED_JOBS_API_ALIAS);
}

export function captureJobApplicationCountGraphQLApi() {
  cy.intercept('POST', '**/profile', (req) => {
    if (req.body.operationName === 'getApplicationCountByJobId') {
      req.alias = JOB_APPLICATION_COUNT_GRAPHQL_API_ALIAS;
      req.continue;
    }
  });
}

export function stubJobApplicationCountGraphQLApi(applicationCount) {
  cy.intercept('POST', '**/profile', (req) => {
    if (req.body.operationName === 'getApplicationCountByJobId') {
      req.alias = STUBBED_JOB_APPLICATION_COUNT_GRAPHQL_API_ALIAS;
      req.reply({
        data: {
          applicationCount: applicationCount
        }
      });
    }
  });
}

export function captureJobSearchApi() {
  cy.intercept('POST', '**/v2/search').as(JOB_SEARCH_API_ALIAS);
}

export function captureSearchResultsClickstreamApi() {
  cy.intercept('POST', '**/v2/analytics/clickstream', (req) => {
    if (req.body.eventType === 'search') {
      req.alias = SEARCH_RESULTS_CLICKSTREAM_API_ALIAS;
      req.continue;
    }
  });
}

export function captureViewJobClickstreamApi() {
  cy.intercept('POST', '**/v2/analytics/clickstream', (req) => {
    if (req.body.eventType === 'view') {
      req.alias = VIEW_JOB_CLICKSTREAM_API_ALIAS;
      req.continue;
    }
  });
}

export function captureJobApplyClickstreamApi() {
  cy.intercept('POST', '**/v2/anaytics/stream', (req) => {
    if (req.body.eventType === 'apply') {
      req.alias = APPLY_JOB_CLICKSTREAM_API_ALIAS;
      req.continue;
    }
  });
}