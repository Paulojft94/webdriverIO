Feature: Selecting an option from a dropdown menu

  Scenario: Select an Option from Dropdown

    Given I navigate to dropdown page
    When I select "Option 2" from the dropdown
    Then the dropdown should display "Option 2" as the selected option
