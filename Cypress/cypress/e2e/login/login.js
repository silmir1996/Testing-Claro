 import {Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
 import '@testing-library/cypress/add-commands';

//Scenario: Successful Login

Given ('A user opens the login page', () =>{
    cy.visit("/")
})

When ('A user enter the username {string}', (username)=>{
    cy.get ('#user-name') .type (username)
})

When ('A user enter the password {string}', (password)=>{
    cy.get ('#password') .type (password)
})

When ('A user clicks on the login button', ()=>{
    cy.get ('#login-button').click ()
})

Then ('A user will be logged in', ()=> {
    cy.url().should ('include', 'edemo.com/inventory.html')
})

When ('A user enter the wrong username {string}', (username)=>{
    cy.get ('#user-name') .type (username)
})

When ('A user enter the wrong password {string}', (password)=>{
    cy.get ('#password') .type (password)
})


Then ('A user will be receiving a failed message', ()=> {
    cy.findByText('Epic sadface: Username and password do not match any user in this service').should('exist') 
})


Then ('A user will be receiving a blocked user message', ()=> {
    cy.findByText('Epic sadface: Sorry, this user has been locked out.').should('exist')         
})
