@only
Feature: Landing
    As a user I want to access to the Landing and be able to explore it.

    Scenario: Redirections 
        Given A user access the Landing
        When A user clicks on Iniciar Sesión button
        Then A user will be redirected to login
        Given A user returns to Landing website
        When A user clicks on Pagá acá button
        Then A user will be redirected to login
        Given A user returns to Landing website
        When A user clicks on Recargá acá button
        Then A user will be redirected to login
        Given A user returns to Landing website
        When A user clicks on Iniciar Sesión #2 button
        Then A user will be redirected to login
        Given A user returns to Landing website
        When A user clicks on Iniciar Sesión #3 button
        Then A user will be redirected to login


    Scenario: Landing - First Section Validation
        Given A user access the Landing
        Then A user visualizes first section text
        Then A user visualizes buttons and logo
    
    Scenario: Landing - Second Section Validation
        Given A user access the Landing
        Then A user visualizes Ahorra con Claro Pay Card
        And A user uses buttons to navigate left and right
        And A user visualizes Tus datos rinden más Card
        And A user navigates using scroll buttons

    Scenario: Landing - Third Section Validation
        Given A user access the Landing
        Then A user visualizes Left Slide

    Scenario: Landing - Fourth Section Validation
        Given A user access the Landing
        Then A user visualizes Envía y Recibí + Promociones
        
    Scenario: Landing - Last Section Validation
        Given A user access the Landing
        Then A user visualizes last section
        Then A user visualizes footer logo
        And A user visualizes footer links

    Scenario: Footer redirections
        Given A user access the Landing
        When A user clicks on FAQS
        Then A user will be redirected to FAQS url
        Given A user access the Landing
        When A user clicks on Apartado legal y regulatorio        
        Then A user will be redirected to Apartado legal y regulatorio url
        Given A user access the Landing
        When A user clicks on Defensa al consumidor
        Then A user will be redirected to Defensa al consumidor url

    Scenario: TyC APIs and Text assertion
        Given A user visits TyC
        Then EP returns 200 
        And A user will see all sections

