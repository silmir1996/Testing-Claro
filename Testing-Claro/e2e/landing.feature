
Feature: Landing
    As a user I want to access to the Landing and be able to explore it.

    # Background:
    #     Given A user opens the login page 
    #     Given A user enter the username 'chris+ob4@paisanos.io' and the password 'Paisanos1'
    #     When A user clicks on the login button
    #     Then A user will be logged in
    
    Scenario: Landing - Validation
        When A user access the Landing
        Then A user visualizes first section
        And A user visualizes second section
        And A user visualizes last section

    # Scenario: TyC APIs Assertion
    #     When A user visits TyC 
    #     Then A user will see all sections

    # Scenario: Recarga Claro
    #     Given A user opens ClaroPay
    #     When A user clicks on Recarga Claro
    #     When A user clicks on "Recarga nueva linea claro" button

    