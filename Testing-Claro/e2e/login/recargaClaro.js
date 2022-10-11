 import {Given, When, Then, And, Background, Before, After} from '@badeball/cypress-cucumber-preprocessor';
 import '@testing-library/cypress/add-commands';

//Background
Given ('A user opens the login page', () =>{
    cy.visit("/", {failOnStatusCode: false})
});

When ('A user enter the username {string} and the password {string}', (username,password) =>{
    cy.get ('#username') .type (username);
    cy.get('#kc-login').click();
    cy.get ('#password') .type (password)
});
When ('A user clicks on the login button', ()=>{
    cy.get('#kc-login').click()
});
Then ('A user will be logged in', ()=> {
    cy.url().should ('contain', 'https://qa.claropay.com.ar/landing');
    cy.visit("/", { timeout: 30000 });
    it ('Almacenar datos de login', () => {
        cy.saveLocalStorage ()
    })
   
})
//Scenario

Given ('A user clicks on Recarga Claro', ()=>{
    it ('Almacenar datos de login', () => {
        cy.restoreLocalStorage ()
        })
        cy.get('.r-150rngu > .r-18u37iz > :nth-child(2) > [data-testid]').click()
})

Then ('A user sees Recargar Claro section', ()=>{
    cy.url () .should ('contain', 'https://qa.claropay.com.ar/RecargarClaro')
})


// Then ('A user will be receiving a failed message', ()=> {
//     cy.findByText('Epic sadface: Username and password do not match any user in this service').should('exist') 
// })


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
// )