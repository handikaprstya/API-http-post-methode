/// <reference types="cypress" />

describe('Delete User', () => {
    it('Successfully deleted user', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/3').then((res) => {
            expect(res.status).equal(204)
        })
    });
});

cy.request('DELETE', '/api/resource/1').then(() => {
    
    cy.request('/api/resource').then((res) => {
      expect(res.body).to.not.include({ id: 1 });
    });
});