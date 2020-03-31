@homePage
Feature: This is a sample feature

  This feature tests the basic functionality of the Google home page

  Scenario: User searches for a search term in the Google home page
    Given I visit the Google Home Page
    When I search for "cypress"
    Then I should see the results for "www.cypress.io"
