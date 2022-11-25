 import {Given, When, Then, And, Background} from '@badeball/cypress-cucumber-preprocessor';
 import '@testing-library/cypress/add-commands';
 import "cypress-localstorage-commands";
 import 'cypress-v10-preserve-cookie';
 import 'cypress-data-session';
 import { slowCypressDown } from 'cypress-slow-down';




//Scenario: Ingresar a la Landing - Validacion

When ('A user access the Landing', () => {
    cy.visit("qa.claropay.com.ar").wait(4000)

});

Then ('A user visualizes first section', ()=> {
    //Assertion de textos
    cy.get('h1 > :nth-child(1)').should('have.text', 'Esta billetera').should('be.visible')
    cy.get('h1 > :nth-child(2)').should('have.text', 'te queda bien.').should('be.visible')
    cy.get('.styles_wrapper__SKuiD > p > :nth-child(1)').should('have.text', 'Iniciá sesión para empezar a vivir la').should('be.visible')
    cy.get('.styles_wrapper__SKuiD > p > :nth-child(2)').should('have.text', 'experiencia Claro Pay.').should('be.visible')
    //Assertion de botón Iniciar Sesión, verificando que este habilitado y visible
    cy.get('.styles_wrapper__SKuiD > .btn').should('have.text', 'Iniciar sesión').should('be.enabled').should('be.visible')
    //Assertion de Logo Claro Pay en la esquina Izquierda
    cy.get('#main-container > div.bg-img > header > svg').should('exist').should('be.visible')
    //Assertion de botón para scrollear abajo: Hover, y que sea visible
    cy.get('#main-container > div.styles_wrapper__mvT1k.undefined > svg').trigger('mouseover',{force: true}).find('path').should('have.attr','fill','#EB3B2F').should('be.visible')
    cy.get('#main-container > div.styles_wrapper__mvT1k.undefined > svg').trigger('mouseout').find('path').should('have.attr','fill','#101010').should('be.visible')
});

Then ('A user visualizes second section', ()=> {
    //Assertion de texto y avance a segunda sección
    cy.contains('Ahorrá con Claro Pay').scrollIntoView().should('be.visible')
    cy.contains('Pagá una factura Claro y tenés un 25% de reintegro por tres meses. Te devolvemos hasta $250 para que los uses como quieras.').should('be.visible')
    //Assertion de botones para pasar de Cards
    cy.get('#main-container > div.bg-img > div > div:nth-child(1) > button').should('be.visible')
    cy.get('#main-container > div.bg-img > div > div:nth-child(2) > button').should('be.visible')
    //Assertion de botones para scrollear a arriba y a abajo
    cy.get('#main-container > div.bg-img > section.styles_wrapper__SKuiD > div.styles_wrapper__qSQ_v.undefined > svg').should('exist').should('be.visible')
    cy.get('#main-container > div.bg-img > header > svg').should('exist').should('be.visible')

});

//Scenario: Ingresar a Recarga Claro    

Given ('A user opens the login page logged', () => {
    cy.session('Chris').wait (2000)
    cy.visit('/').wait (8000)
});

Given ('A user opens ClaroPay', () => {
    cy.session('Chris').wait (2000)
    cy.visit('/').wait (4000)
});

When ('A user clicks on Recarga Claro', ()=>{
    cy.get('.r-150rngu > .r-18u37iz > :nth-child(2) > [data-testid]',{ timeout: 30000 }).click()
});

Then ('A user sees Recargar Claro section', ()=>{
    cy.url().should('contain', 'https://qa.claropay.com.ar/RecargarClaro')
});

//Scenario: Recarga Claro

When ('A user clicks on "Recarga nueva linea claro" button', ()=>{
    cy.get('.r-1kihuf0 > .css-1dbjc4n > [data-testid]').click()
});



// Then ('A user will be receiving a blocked user message', ()=> {
//     cy.findByText('Epic sadface: Sorry, this user has been locked out.').should('exist')         
// })

// Then ('A user will see all elements', () => {
//     cy.get('[data-test="username"]')
//     cy.get('[data-test="password"]')
//     cy.get('[data-test="login-button"]')
//     cy.get('#login_credentials > h4')
//     cy.get('#login_credentials > h4')
//     cy.get('.login_password')
//     cy.get('.login_password').should('have.text','Password for all users:secret_sauce')
//     cy.get ('#login_credentials > h4').should('have.text','Accepted usernames are:')
//     cy.get('#login_credentials').should('have.text', 'Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitch_user')
// }