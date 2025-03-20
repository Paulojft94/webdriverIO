Feature: Add and Remove elements of a webpage

  Scenario: Add and Remove Elements on the Add/Remove Elements Page
  
    Given I navigate to add_remove_elements page
    When I click the "Add Element" button 3 times
    Then I should see 3 "Delete" buttons
    When I click one "Delete" button
    Then I should see 2 "Delete" buttons
