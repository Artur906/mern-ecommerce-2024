describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.fixture('users').then((users) => {
      cy.get('#email').type(users[0].email)
      cy.get('#password').type(users[0].password)

      cy.get('.inline-flex').click()

      // it will trhow an error because the user is not authenticated
      cy.get('.group').should('be.visible')
    })
  })
})