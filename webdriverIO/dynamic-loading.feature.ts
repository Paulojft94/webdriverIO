Feature: Dynamic loading of elements

    Scenario: Verify Dynamic Loading of Elements

    Given I navigate to dynamic_loading/1 page
    When I click the "Start" button
    Then I should eventually see the text "Hello World!" on the page
