 import {Given, When, Then, And, Background} from '@badeball/cypress-cucumber-preprocessor';
 import '@testing-library/cypress/add-commands';
 import "cypress-localstorage-commands";
 import 'cypress-v10-preserve-cookie';
 import 'cypress-data-session';
 import { slowCypressDown } from 'cypress-slow-down';




//Scenario: Login
// before ('successfully logs in via GUI',() => {
//     // cy.intercept('GET', `${Cypress.env('apiUrl')}/models?userId=*`)
//     //       .as('getUserModels')
//     cy.loginViaAPI()
//     // cy.wait('@getUserModels')
//     // cy.url().should('contain', 'https://qa.claropay.com.ar/Inicio')
// });

before(() => {
    cy.session('Chris',() =>{
    cy.visit("qa.claropay.com.ar/Inicio");
    cy.get('#username') .type('chris+ob4@paisanos.io');
    cy.get('#kc-login').click();
    cy.get('#password') .type( 'Paisanos1');
    cy.get('#kc-login').dblclick().wait(6000);
    })
});

// beforeEach (() => {
//     cy.session('Chris');
//     cy.visit("qa.claropay.com.ar/Inicio")
// });

// Given ('A user opens the login page', () => {
//     cy.visit("qa.claropay.com.ar/Inicio").wait(6000)//{timeout: 40000})
// });

// When ('A user enter the username {string} and the password {string}', (username,password) =>{
//     cy.get('#username') .type(username);
//     cy.get('#kc-login').click();
//     cy.get('#password') .type(password)
// });

// When ('A user clicks on the login button', ()=>{
//     cy.get('#kc-login').click().wait (2000)
// });

// Then ('A user will be logged in', ()=> {
//     cy.visit('https://qa.claropay.com.ar/Inicio', {timeout: 40000});
//     // cy.url().should('contain', 'https://qa.claropay.com.ar/Inicio');
// });

//Scenario: Ingresar a Recarga Claro 

Given ('A user opens the login page logged', () => {
    cy.session('Chris').wait (2000)
    cy.visit('https://qa.claropay.com.ar/Inicio').wait (4000)
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