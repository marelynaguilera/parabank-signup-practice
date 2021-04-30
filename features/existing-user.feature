Feature: Failed sign up at parabank due to existing account

  Scenario Outline: As an existing user I can't sign up successfully at parabank 

    Given I am on Parabank sign up page
    When I signup with information:
      | first_name  | last_name | address           | city      | state | zip       | phone_number  | ssn       | username  | password  | confirm_password  |
      | Maria       | Aguilera  | Example Address   | Cuenca    | Azuay | 010107    | 0999795423    | 12345678  | maria2    | 123456    | 123456            |

    Then I get an error message "This username already exists."