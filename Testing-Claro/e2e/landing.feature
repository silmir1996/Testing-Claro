@only
Feature: Landing
    As a user I want to access to the Landing and be able to explore it.

    Scenario: Landing - First Section Validation
        Given A user access the Landing
        Then A user visualizes first section
        # And A user visualizes third section
        # And A user visualizes last section
    
    Scenario: Landing - Second Section Validation
        Given A user access the Landing
        Then A user visualizes cards second section

    Scenario: Landing - Last Section Validation
        Given A user access the Landing
        Then A user visualizes last section

    # Scenario: TyC APIs and Text assertion
    #     Given A user visits TyC 
    #     Then A user will see all sections


    