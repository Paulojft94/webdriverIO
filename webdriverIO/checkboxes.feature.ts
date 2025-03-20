Feature: Check and uncheck checkboxes

  Scenario: Toggle Checkboxes
  
    Given I navigate to checkboxes page
    When I check the first checkbox
    And I uncheck the second checkbox
    Then the first checkbox should be checked
    And the second checkbox should not be checked