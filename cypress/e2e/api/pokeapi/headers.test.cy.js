/// <reference types= "cypress" />

describe('Automation API with Pokeapi', () => {
    it.only('Successfully validate content-type', () => {

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

        // Validate Body abilities Object
            expect(res.body.abilities[0].ability.name).to.eq('limber')
            expect(res.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/')
        });
    });

    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Successfully validate status code with params', () => {
        cy.request({
            methode: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/ditto"
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });

    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ivysaur').as('ivysaur')
        cy.get('@ivysaur').its('body').should('include', {name: 'ivysaur'})
    });
});