import { DATA_OPTIONS, getUserData } from "../../../utils/requestsDataGenerator";

context('Testing POST method in reqres', () => {

  it('Positive test: create a user', () => {
    cy.fixture('createUser').then(user => {

      cy.request('POST', '/api/users', user).then(Response => {
        expect(Response.status).to.eq(201)
        expect(Response.body).to.have.property('name', user.name)
        expect(Response.body).to.have.property('job', user.job)
        expect(Response.body).to.have.property('id', user.id)
      })
    })
  })

  it('Positive test: register a user', () => {
    cy.fixture('registerUser').then(user => {

      cy.request('POST', '/api/register', user).then(Response => {
        expect(Response.status).to.eq(200)
        expect(Response.body).to.have.property('id', 4)
        expect(Response.body).to.have.property('token', 'QpwL5tke4Pnpja7X4')
      })
    })
  })

  it('Positive test: login an existing user', () => {
    cy.fixture('loginUser').then(user => {

      cy.request('POST', '/api/login', user).then(Response => {
        expect(Response.status).to.eq(200)
        expect(Response.body).to.have.property('token', 'QpwL5tke4Pnpja7X4')
      })
    })
  })

  it('Negative test: login unsuccessful', () => {
    cy.request({
      method: 'POST', url: '/api/login', failOnStatusCode: false, body:
      {
        email: "peter@klaven"
      }
    }).then(Response => {
      expect(Response.status).to.eq(400)
      expect(Response.body).to.have.property('error', 'Missing password')
    })
  })

  it('Negative test: register unsuccessful', () => {
    cy.request({
      method: 'POST', url: '/api/register', failOnStatusCode: false, body:
      {
        email: "sydney@fife"
      }
    }).then(Response => {
      expect(Response.status).to.eq(400)
      expect(Response.body).to.have.property('error', 'Missing password')
    })
  })
})

context('Parametrized test for creating a user', () => {
  let testingData = [
    {
      description: 'Max values',
      requestData: getUserData(DATA_OPTIONS.MAX)
    },
    {
      description: 'Min values',
      requestData: getUserData(DATA_OPTIONS.MIN)
    },
    {
      description: 'Random Average values',
      requestData: getUserData(DATA_OPTIONS.AVERAGE)
    }
  ]
  testingData.forEach(({ description, requestData }) => {
    it(`Positive: POST request - create a user (random values) - ${description}`, () => {
      cy.request('POST', '/api/users', requestData).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('name', requestData.name)
        expect(response.body).to.have.property('job', requestData.job)
      })
    })
  })
})