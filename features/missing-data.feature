Feature: Failed sign up at parabank due to missing information

  Scenario Outline: As an existing user I can't sign up successfully at parabank 

    Given I am on Parabank sign up page
    When I signup with information:
      | first_name | last_name  | address  | city | state | zip | phone_number  | ssn | username  | password  | confirm_password  |
      |            |            |          |      |       |     |               |     |           |           |                   |

    Then I get an error messages for all fields