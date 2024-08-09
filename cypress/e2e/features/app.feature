Feature: Snapshot website test scenarios
  Scenario: visiting the home page - successful search
    Given I visit the home page
    Then the header should be visible
    Then I should be redirected to the Mountain Pictures search
    Then I click in the text input
    Then I type birds into the search input and press search button
    Then I should see Birds Images in header
