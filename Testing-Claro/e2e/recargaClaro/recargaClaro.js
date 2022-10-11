 import {Given, When, Then, And, Background} from '@badeball/cypress-cucumber-preprocessor';
 import '@testing-library/cypress/add-commands';
 import "cypress-localstorage-commands";
 import 'cypress-v10-preserve-cookie';
 import "cypress-localstorage-commands";
 import 'cypress-data-session';


//Scenario: Login

// before(() => {
// cy.clearLocalStorageSnapshot();
// cy.log ('se limpiaron las cookies')
// });

beforeEach(() => {
cy.restoreLocalStorage('_grecaptcha', 'APP_INSTALLED', 'EXPO_CONSTANTS_INSTALLATION_ID', 'session_2' , 'session', 'JSESSIONID', 'b34b515f92ad5491be31f2bd57e9fba7');
cy.restoreLocalStorage().wait (2000);
cy.log ('Cookies recuperadas');
cy.preserveCookieOnce(
    '_grecaptcha', 
    'APP_INSTALLED', 
    'EXPO_CONSTANTS_INSTALLATION_ID', 
    'session_2' , 
    'session', 
    'JSESSIONID', 
    'b34b515f92ad5491be31f2bd57e9fba7');
cy.getCookie ('_grecaptcha');
cy.getCookie ('APP_INSTALLED');
cy.getCookie ('EXPO_CONSTANTS_INSTALLATION_ID');
cy.getCookie ('session_2');
cy.getCookie ('session');
cy.getCookie ('JSESSIONID');
cy.getCookie ('b34b515f92ad5491be31f2bd57e9fba7');
cy.wait (2000);
cy.visit("/")
});

afterEach(() => {
cy.saveLocalStorage('_grecaptcha', 'APP_INSTALLED', 'EXPO_CONSTANTS_INSTALLATION_ID', 'session_2' , 'session', 'JSESSIONID', 'b34b515f92ad5491be31f2bd57e9fba7');
cy.preserveCookieOnce('_grecaptcha', 'APP_INSTALLED', 'EXPO_CONSTANTS_INSTALLATION_ID', 'session_2' , 'session', 'JSESSIONID', 'b34b515f92ad5491be31f2bd57e9fba7');
cy.log ('Cookies guardadas')
});

// Given ('A user retrieves its login session cookies', () => {
//     cy.restoreLocalStorage();
//     cy.visit("/")
//   });

// before(() => {
//     cy.preserveCookieOnce('_grecaptcha', 'APP_INSTALLED', 'EXPO_CONSTANTS_INSTALLATION_ID', 'session_2' , 'session', 'JSESSIONID', 'b34b515f92ad5491be31f2bd57e9fba7');
// })

Given ('A user opens the login page', () => {
    cy.visit("/")
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
    cy.url().should ('contain', 'https://qa.claropay.com.ar/Inicio');
});

//Background

// Given ('A user retrieves its login session cookies', () => {
//     cy.restoreLocalStorage('_grecaptcha', 'APP_INSTALLED', 'EXPO_CONSTANTS_INSTALLATION_ID', 'session_2' , 'session', 'JSESSIONID', 'b34b515f92ad5491be31f2bd57e9fba7'),
//     cy.visit ('https://qa.claropay.com.ar/Inicio'),
//     cy.restoreLocalStorage()
// });

//Scenario: Ingresar a Recarga Claro 

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
// )