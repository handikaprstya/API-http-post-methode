describe('Validate Header', () => {
    it('Successfully validate content-type', () => {

        // Validate Headers
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
        cy.get('@pokemon').its('headers').its('content-length')
        .should('include', 2023)
        cy.get('@pokemon').its('headers').its('server')
        .should('include', 'cloudflare')
        cy.get('@pokemon').its('headers').its('connection')
        .should('include', 'keep-alive')

        // Validate Body
        cy.get('@pokemon').then((res) =>{
            expect(res.body).to.have.property('name', 'ditto') 
            expect(res.body).to.have.property('id', 132)
            expect(res.body).to.have.property('abilities')
            expect(res.body.abilities).to.be.an('array')
            expect(res.body.abilities[0]).to.have.property('ability')
        });
    });
});