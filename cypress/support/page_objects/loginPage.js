//import { type } from "cypress/types/jquery";

class LoginPage {
    open() {
        cy.visit(`${Cypress.env('sauceURL')}`)
    }

    get usernameInput() {
        return cy.get('[data-test=username]')
    }

    get passwordInput() {
        return cy.get('[data-test=password]')
    }

    get loginButton() {
        return cy.get('#login-button')
    }

    get errorMessage() {
        return cy.get('[data-test=error]')
    }

    typeUserName(name) {
        this.usernameInput.type(`${name}{enter}`)
    }

    typeUserPassword(password) {
        this.passwordInput.type(`${password}{enter}`)
    }

    clickLogin() {
        this.loginButton.click()
    }
}

export default new LoginPage()
