import LoginPage from '../../../support/page_objects/loginPage';
import ProductsPage from '../../../support/page_objects/productsPage';

context('Tesing sauce web', () => {
  it('Login using valid username and password', () => {
    cy.fixture('validSauceUser').then((user) => {
      cy.log("Given that I'm a user on Login page")
      LoginPage.open()
      cy.log('When I enter valid credentials')
      LoginPage.typeUserName(user.name)
      LoginPage.typeUserPassword(user.password)
      cy.log('And I click Login button')
      LoginPage.clickLogin()
      cy.log('Then I should land on products page')
      cy.url().should('include', '/inventory.html')
      cy.contains('Products').should('be.visible')
    })
  })

  it('Login using wrong username and password', () => {
    cy.fixture('invalidSauceUser').then((user) => {
      cy.log("Given that I'm a user on Login page")
      LoginPage.open()
      cy.log('When I enter invalid credentials')
      LoginPage.typeUserName(user.name)
      LoginPage.typeUserPassword(user.password)
      cy.log('And I click Login button')
      LoginPage.clickLogin()
      cy.log("Then the error message appears 'Epic sadface: Username and password do not match any user in this service'")
      LoginPage.errorMessage.should('be.visible')
      LoginPage.errorMessage.should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
  })

  it('Login without username', () => {
    cy.fixture('validSauceUser').then((user) => {
      cy.log("Given that I'm a user on Login page")
      LoginPage.open()
      cy.log('When I enter password only')
      LoginPage.typeUserPassword(user.password)
      cy.log('And I click Login button')
      LoginPage.clickLogin()
      cy.log("Then the error message appears 'Epic sadface: Username is required'")
      LoginPage.errorMessage.should('be.visible')
      LoginPage.errorMessage.should('have.text', 'Epic sadface: Username is required')
    })
  })

  it('Login without password', () => {
    cy.fixture('validSauceUser').then((user) => {
      cy.log("Given that I'm a user on Login page")
      LoginPage.open()
      cy.log('When I enter name only')
      LoginPage.typeUserName(user.name)
      cy.log('And I click Login button')
      LoginPage.clickLogin()
      cy.log("Then the error message appears 'Epic sadface: Password is required'")
      LoginPage.errorMessage.should('be.visible')
      LoginPage.errorMessage.should('have.text', 'Epic sadface: Password is required')
    })
  })

  it('Shopping cart badge is not displayed', () => {
    cy.log("Given that I'm a logged in user on Products page")
    cy.login()
    cy.log('And I have no products in my cart')
    cy.log('Then shoppind cart without a badge is displayed')
    ProductsPage.shoppingCart.should('be.visible')
    ProductsPage.shoppingCartBadge.should('not.exist')
  })

  it('Add a product to the cart', () => {
    cy.log("Given that I'm a logged in user on Products page")
    cy.login()
    cy.log("When I click 'Add to Cart' button")
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.log('Then the product is added to the cart')
    ProductsPage.shoppingCartBadge.should('be.visible')
    ProductsPage.shoppingCartBadge.should('have.text', '1')
  })

  it('Remove button is displayed', () => {
    cy.log("Given that I'm a logged in user on Products page")
    cy.login()
    cy.log('And I have added a product to my cart')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.log('Then "Remove" button is displayed instead of "Add to Cart"')
    cy.get('[data-test=remove-sauce-labs-bike-light]').should('exist')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('not.exist')
  })

  it('Products filter is displayed', () => {
    cy.log("Given that I'm a logged in user on Products page")
    cy.login()
    cy.log('Then products filter is displayed')
    ProductsPage.productsFilter.should('be.visible')
  })

  it('Cart can be opened from the Products page', () => {
    cy.log("Given that I'm a logged in user on Products page")
    cy.login()
    cy.log('When I Click on the shopping cart icon')
    ProductsPage.shoppingCart.click()
    cy.log('Then I should be redirected to the cart page')
    cy.url().should('include', '/cart.html')
    cy.contains('Your Cart').should('be.visible')
  })
})
