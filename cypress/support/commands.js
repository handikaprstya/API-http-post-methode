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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




// Cypress.Commands.add('loginViaAPI', (
//     email = 'admin',
//     password = 'admin'
// ) => {
//     cy.request('POST', 'https://the-internet.herokuapp.com/basic_auth', {
//         username: email,
//         password,
//     }).then((response) => {
//         cy.setCookie('SessionId', response.body.sessionId)
//         cy.setCookie('User Id', response.body.userId)
//         cy.setCookie('userName', response.body.userName)
//         cy.visit('https://the-internet.herokuapp.com/basic_auth')
//     });
// });


Cypress.Commands.add('LoginViaAPI', (email = 'admin', password = 'admin') => {
    const encodedCredentials = btoa(`${email}:${password}`);

    cy.request({
        method: 'GET',
        url: 'https://admin:admin@the-internet.herokuapp.com/basic_auth',
        headers: {
            'Authorization': `Basic ${encodedCredentials}`
        }
    }).then((res) => {
        expect(res.status).to.eq(200)

        cy.setCookie('authToken', encodedCredentials);

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    })
})