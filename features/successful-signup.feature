Feature: Successful sign up at parabank

  Scenario Outline: As a user I can sign up successfully at parabank when provide valid information

    Given I am on Parabank sign up page
    When I signup with valid information:
      | first_name  | last_name | address           | city      | state | zip       | phone_number  | ssn       | username  | password  | confirm_password  |
      | Maria       | Aguilera  | Example Address   | Cuenca    | Azuay | 010107    | 0999795423    | 12345678  | maria3    | 123456    | 123456            |

    Then I get a successfully register message "Your account was created successfully. You are now logged in."