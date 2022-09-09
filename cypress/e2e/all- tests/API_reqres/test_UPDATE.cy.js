context('Testing PUT and PATCH methods in reqres', () => {

  it('Positive: update a user by id', () => {
    cy.fixture('updateduser').then(updateduser => {

      cy.request('PUT', '/api/users/2', updateduser).then(Response => {
        expect(Response.status).to.eq(200)
        expect(Response.body.name).to.eq(updateduser.name)
        expect(Response.body.job).to.eq(updateduser.job)
      })
    })
  })

  it('Positive: update a user by id', () => {
    cy.request('PUT', '/api/users/2', {
      'name': 'morpheus',
      'job': 'zion resident'
    }
    ).then(Response => {
      expect(Response.status).to.eq(200)
      expect(Response.body.name).to.eq('morpheus')
      expect(Response.body.job).to.eq('zion resident')
    })
  })
})