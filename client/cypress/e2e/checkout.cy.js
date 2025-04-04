/// <reference types="cypress" />
import { HomePage, LoginPage, CheckoutPage } from "../support/pageObjects"

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
    cy.visit('/');

    LoginPage.login(email, password)

    // HomePage.getProduct(product._id).then(($product) => {
    //   cy.get($product)
    //     .should('contain', product.title)
    //     .should('contain', product.salePrice)

    // }).find('button').click()

    HomePage.getProduct(product._id)
      .should('contain', product.title)
      .should('contain', product.salePrice)
      .find('button').click()

    HomePage.getCartSheet().should('contain', '1').click()

    HomePage.clickCheckoutButton()

    cy.url().should('contain', 'checkout')

    CheckoutPage.fillAdressForm(address, city, pincode, phone, notes)
    CheckoutPage.clickAddAddressButton()
  })
})