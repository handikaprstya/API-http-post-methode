describe('Get Users List', () => {
    it('Verify the users list will displayed', () => {
        cy.request({
            methode: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_pages=1&delay=1'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
});

describe('Get User List without params', () => {
    it('Verify the users list will displayed', () => {
        cy.request({
            methode: 'GET',
            url: 'https://reqres.in/api/users'
        }).as('id')
        cy.get('@id').its('status').should('equal', 200)
    });
});