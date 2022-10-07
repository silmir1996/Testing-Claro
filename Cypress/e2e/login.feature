Feature: Login Feature 

    Scenario: Check Elements
    Given A user opens the login page
    Then A user will see all elements
    
    Scenario: Successful Login
    Given A user opens the login page
    When A user enter the username 'standard_user'
    When A user enter the password 'secret_sauce'
    When A user clicks on the login button
    Then A user will be logged in

    Scenario: Unsuccessful Login - Wrong credentials
    Given A user opens the login page 
    When A user enter the wrong username 'standard'
    When A user enter the wrong password 'secret'
    When A user clicks on the login button
    Then A user will be receiving a failed message

    Scenario: Unsuccessful Login - Wrong user credential
    Given A user opens the login page 
    When A user enter the username 'standard'
    When A user enter the wrong password 'secret_sauce'
    When A user clicks on the login button
    Then A user will be receiving a failed message

    Scenario: Unsuccessful Login - Wrong password 
    Given A user opens the login page 
    When A user enter the username 'standard_user'
    When A user enter the wrong password 'secret'
    When A user clicks on the login button
    Then A user will be receiving a failed message

    Scenario: Unsuccessful Login - Blocked
    Given A user opens the login page 
    When A user enter the wrong username 'locked_out_user'
    When A user enter the wrong password 'secret_sauce'
    When A user clicks on the login button
    Then A user will be receiving a blocked user message

    