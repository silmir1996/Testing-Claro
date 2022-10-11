Feature: Recarga Claro 
        
    Scenario: Login
        Given A user opens the login page 
        Given A user enter the username 'chris+ob4@paisanos.io' and the password 'Paisanos1'
        When A user clicks on the login button
        Then A user will be logged in

    Scenario: Ingresar a Recarga Claro 
        When A user clicks on Recarga Claro
        Then A user sees Recargar Claro section 

    Scenario: Recarga Claro
        When A user clicks on Recarga Claro
        When A user clicks on "Recarga nueva linea claro" button

    