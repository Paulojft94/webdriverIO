Feature: Handling JavaScript alerts

  Scenario: Handle JavaScript Alert

    Given I navigate to javascript_alerts page
    When I click the button labeled "Click for JS Alert"
    And I accept the alert
    Then I should see the message "You successfully clicked an alert"
