class HomePage {
  visit() {
    cy.visit('auth/register')
  }

  clickUserMenu() {
    cy.get('[cy-test="user-menu-trigger"]').click()
    return this // Return this instance to allow method chaining
  }
  
  clickLogout() {
    cy.get('[cy-test="logout-menu-item"]').click()
  }

  clickAccount() {
    cy.get('[cy-test="account-menu-item"]').click()
  }

  getProduct(productId) {
    return cy.get(`[cy-test="product-${productId}"]`)
  }

  getFeaturedProducts() {
    return cy.get('[cy-test="featured-products"]').children()
  }

  getCartSheet() {
    return cy.get('[cy-test="cart-sheet"]')
  }

  clickCheckoutButton() {
    cy.get('[cy-test="checkout-button"]').click()
  } 

  submit() {
    cy.get('[cy-test=submit]').click()
  }
}

export default new HomePage();