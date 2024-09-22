describe('Create new User', () => {
    it('Successfully create new user', () => {
        let user = {
            "name": "Edinson",
            "job": "Lecture"
        }

        cy.request('POST', 'https://reqres.in/api/users', user).then((res) => {
            expect(res.status).equal(201)
            // expect(res.body.name).equal("Edinson")
            // expect(res.body.job).equal("Lecture")

            expect(res.body).have.property('name', 'Edinson')
            expect(res.body).have.property('job', 'Lecture')
        });
    });
});