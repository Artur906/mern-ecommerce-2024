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

    cy.login(email, password)

    // it will trhow an error because the user is not authenticated
    cy.get('body').should('contain', `User doesn't exists! Please register first`)
  })

  it('login succesfully', () => {
    const { email, password } = users['validUser']

    cy.visit('/')

    cy.login(email, password)

    // it will trhow an error because the user is not authenticated
    cy.url().should('contain', 'shop/home')
  })


  it.only('should logout succesfully', () => {
    const { email, password } = users['validUser']

    cy.visit('/')

    cy.login(email, password)

    cy.get('[cy-test="user-menu-trigger"]').click()
    cy.get('[cy-test="logout-menu-item"]').click()

    cy.url().should('contain', 'auth/login')
  })


})