context('Testing DELETE method in reqres', () => {
  it('Negative test: delete a single user by id', () => {
    cy.request({ method: 'DELETE', url: '/api/users/2', failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(204)
    })
  })
})
