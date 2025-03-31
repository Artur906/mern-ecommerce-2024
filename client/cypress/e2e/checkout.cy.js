/// <reference types="cypress" />

describe('checkout spec', () => {
  let users
  let products

  before(() => {
    cy.fixture('users').then((data) => {
      users = data
      const { userId } = users['validUser']

      cy.request('GET', 'http://localhost:5000/api/shop/products/get').then((response) => {
        cy.log(JSON.stringify(response.body.data))
        products = response.body.data
        const [product] = products

        const productId = product._id

        cy.request('DELETE', `http://localhost:5000/api/shop/cart/${userId}/${productId}`)
      })
    })
  })

  it.only('should buy a product', () => {
    const { email, password, address: {address, city, pincode, phone, notes}} = users['validUser']
    const [product] = products
    cy.visit('/')

    cy.login(email, password)

    cy.get(`[cy-test="product-${product._id}"]`).then(($product) => {
      cy.get($product)
        .should('contain', product.title)
        .should('contain', product.salePrice)

    }).find('button').click()

    cy.get('[cy-test="cart-sheet"]').should('contain', '1').click()
    cy.get('[cy-test="checkout-button"]').click()

    cy.get('[cy-test="address"').click().type(address)
    cy.get('[cy-test="city"').click().type(city)
    cy.get('[cy-test="pincode"').click().type(pincode)
    cy.get('[cy-test="phone"').click().type(phone)
    cy.get('[cy-test="notes"').click().type(notes)
  })
})