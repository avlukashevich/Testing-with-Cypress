context('Testing GET method in reqres', () => {
  it('Positive test: list a single user by id', () => {
    cy.request('GET', '/api/users/9').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.property('email', 'tobias.funke@reqres.in')
      expect(response.body.data).to.have.property('last_name', 'Funke')
    })
  })

  it('Positive test: list users by page number', () => {
    cy.request('GET', '/api/users?page=2').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('page', 2)
      expect(response.body).to.have.property('per_page', 6)
      expect(response.body.data[0].email).to.equal('michael.lawson@reqres.in')
    })
  })

  it('Positive test: list users by resourse', () => {
    cy.request('GET', '/api/unknown').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('page', 1)
      expect(response.body).to.have.property('per_page', 6)
    })
  })

  it('Positive test: list a single user by resourse', () => {
    cy.request('GET', '/api/unknown/2').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.property('name', 'fuchsia rose')
      expect(response.body.data).to.have.property('id', 2)
    })
  })

  it('Positive test: list users with delayed response', () => {
    cy.request('GET', '/api/users?delay=3').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Negative test: user not found due to the invalid id', () => {
    cy.request({ method: 'GET', url: '/api/users/775g6', failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('Negative test: user not found by unknown resourse', () => {
    cy.request({ method: 'GET', url: '/api/unknown/23', failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})
