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

Then ('A user visualize and explore it entirely', ()=> {
  cy.get('h1 > :nth-child(1)').should('have.text', 'Esta billetera')
  cy.get('h1 > :nth-child(2)').should('have.text', 'te queda bien.')
  cy.get('.styles_wrapper__SKuiD > p > :nth-child(1)').should('have.text', 'Iniciá sesión para empezar a vivir la')
  cy.get('.styles_wrapper__SKuiD > p > :nth-child(2)').should('have.text', 'experiencia Claro Pay.')
  cy.get('.styles_wrapper__SKuiD > .btn').should('exist').should('have.text', 'Iniciar sesión').should('be.enabled')
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