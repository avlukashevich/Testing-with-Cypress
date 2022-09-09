import LoginPage from "../../../page_objects/loginPage"
import ProductsPage from "../../../page_objects/productsPage"

context('Tesing sauce web', () => {

   it('Login using valid username and password', () => {
      cy.fixture('validSauceUser').then(user => {
         cy.log("Given that I'm a user on Login page")
         LoginPage.open()
         cy.log("When I enter valid credentials")
         LoginPage.typeUserName(user.name)
         LoginPage.typeUserPassword(user.password)
         cy.log("And I click Login button")
         LoginPage.clickLogin()
         cy.log("Then I should land on products page")
         cy.url().should('include', '/inventory.html')
         cy.contains('Products').should('be.visible')
      })
   })

   it('Login using wrong username and password', () => {
      cy.fixture('invalidSauceUser').then(user => {
         cy.log("Given that I'm a user on Login page")
         LoginPage.open()
         cy.log("When I enter invalid credentials")
         LoginPage.typeUserName(user.name)
         LoginPage.typeUserPassword(user.password)
         cy.log("And I click Login button")
         LoginPage.clickLogin()
         cy.log("Then the error message appears 'Epic sadface: Username and password do not match any user in this service'")
         LoginPage.errorMessage.should('be.visible')
         LoginPage.errorMessage.should('have.text', 'Epic sadface: Username and password do not match any user in this service')
      })
   })

   it('Login without username', () => {
      cy.fixture('validSauceUser').then(user => {
         cy.log("Given that I'm a user on Login page")
         LoginPage.open()
         cy.log("When I enter password only")
         LoginPage.typeUserPassword(user.password)
         cy.log("And I click Login button")
         LoginPage.clickLogin()
         cy.log("Then the error message appears 'Epic sadface: Username is required'")
         LoginPage.errorMessage.should('be.visible')
         LoginPage.errorMessage.should('have.text', 'Epic sadface: Username is required')
      })
   })

   it('Login without password', () => {
      cy.fixture('validSauceUser').then(user => {
         cy.log("Given that I'm a user on Login page")
         LoginPage.open()
         cy.log("When I enter name only")
         LoginPage.typeUserName(user.name)
         cy.log("And I click Login button")
         LoginPage.clickLogin()
         cy.log("Then the error message appears 'Epic sadface: Password is required'")
         LoginPage.errorMessage.should('be.visible')
         LoginPage.errorMessage.should('have.text', 'Epic sadface: Password is required')
      })
   })

   it('Shopping cart badge is not displayed', () => {
      cy.log("Given that I'm a logged in user on Products page")
      cy.login()
      cy.log("And I have no products in my cart")
      cy.log("Then shoppind cart without a badge is displayed")
      ProductsPage.shoppingCart.should('be.visible')
      ProductsPage.shoppingCartBadge.should('not.exist')
   })

   it('Add a product to the cart', () => {
      cy.log("Given that I'm a logged in user on Products page")
      cy.login()
      cy.log("And there are some products in the catalog")
      //should add a check
      cy.log("When I click 'Add to Cart' button")
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      cy.log("Then the product is added to the cart")
      ProductsPage.shoppingCartBadge.should('be.visible')
      ProductsPage.shoppingCartBadge.should('have.text', '1')
   })

   it('Products filter is displayed', () => {
      cy.log("Given that I'm a logged in user on Products page")
      cy.login()
      cy.log("Then products filter is displayed  ")
      ProductsPage.productsFilter.should('be.visible')
   })

   it('Sort product by price (high to low)', () => {
      cy.log("Given that I'm a logged in user on Products page")
      cy.login()
      cy.log("When I click on the filters container and sort product by price")
      ProductsPage.productsFilter.select('hilo')
      cy.log("Then products are sorted by price")
      //should add the check for sorting
   })
})