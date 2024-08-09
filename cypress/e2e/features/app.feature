Feature: Snapshot website test scenarios
  Scenario: visiting the home page - successful search
    Given I visit the home page
    Then the header should be visible
    Then I should be redirected to the Mountain Pictures search
