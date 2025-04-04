import { HomePage, LoginPage } from "../support/pageObjects"

describe('auth spec', () => {
  let users

  before(() => {
    cy.fixture('users').then((data) => {
      users = data
    })
  })

  it('login unsuccesfully', () => {
    const { email, password } = users['invalidUser']

    cy.visit('/')

    LoginPage.fillEmail(email)
    LoginPage.fillPassword(password)
    LoginPage.submit()
    LoginPage.checkLoginError()
  })

  it('login succesfully', () => {
    const { email, password } = users['validUser']

    LoginPage.visit()

    LoginPage.fillEmail(email)
    LoginPage.fillPassword(password)
    LoginPage.submit()

    cy.url().should('contain', 'shop/home')
    cy.get('body').should('contain', 'Logged in successfully')
  })


  it('should logout succesfully', () => {
    const { email, password } = users['validUser']

    LoginPage.login(email, password)
    cy.get('body').should('contain', 'Logged in successfully')

    HomePage
      .clickUserMenu()
      .clickLogout()

    cy.url().should('contain', 'auth/login')
  })
})