describe('Update User', () => {
    it('SUcessfully update user', () => {
        let user = {
            "name": "Andrich",
            "job": " Store Manager"
        }
        cy.request('PUT', 'https://reqres.in/api/users/3', user).then((res) => {
            expect(res.status).equal(200)
            // expect(res.body).have.property('name', user.name)
            expect(res.body.name).to.eq(user.name)
        })
    });
});