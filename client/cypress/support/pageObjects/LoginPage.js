class LoginPage {
  visit() {
    cy.visit('auth/login')
  }
  
  clickRegisterButton() {
    cy.get('Register').click()
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

  checkLoginError() {
    cy.get('[cy-test="toast"]').should('be.visible').should('contain', "User doesn't exists! Please register first");
  }

  checkWrongPasswordError() {
    cy.get('[cy-test="toast"]').should('be.visible').should('contain', "Incorrect password! Please try again"); //this is not a good practice
  }

  login(email, password) {
    this.visit()
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  }
}

export default new LoginPage();