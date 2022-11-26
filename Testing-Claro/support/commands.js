// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// import 'cypress-data-session';


Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('chris+ob4@paisanos.io'),
    password = Cypress.env('Paisanos1')
  ) => {
    it('Request', ()=> {
        cy.request('POST', `${Cypress.env('https://desa-login.claro.com.ar')} /auth/realms/claro/login-actions/...`, {
            username: email,
            password,
        }).then((response) => {
            cy.setCookie('session_2', response.body.session_2);
            cy.setCookie('session', response.body.session);
            cy.setCookie('JSESSIONID', response.body.JSESSIONID);
            cy.setCookie('b34b515f92ad5491be31f2bd57e9fba7', response.body.b34b515f92ad5491be31f2bd57e9fba7)})
    //   cy.visit('/')
    })
});

//   Cypress.Commands.add('loginViaAPI', (
//   cy.request('POST', 'API', { user: 'Jane', password:"123" }).then(
//     (response) => {
//       cy.log(response)
//     })));

//HIDE FETCH/XHR

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}
