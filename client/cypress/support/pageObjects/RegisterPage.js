class RegisterPage {
  visit() {
    cy.visit('auth/register')
  }

  clickLoginButton() {
    cy.get('Login').click()
  }
  
  fillUsername(username) {
    cy.get('[cy-test=username]').type(username)
  }

  fillEmail(email) {
    cy.get('[cy-test=email]').type(email)
  }

  fillPassword(password) {
    cy.get('[cy-test=password]').type(password)
  }

  submit() {
    cy.get('[cy-test=submit]').click()
  }

  checkAlreadySignedEmailError() {
    cy.get('[cy-test="toast"]').should('be.visible').should('contain', "User Already exists with the same email! Please try again");
  }
}

export default new RegisterPage();