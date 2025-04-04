class CheckoutPage {
  visit() {
    cy.visit('shop/chekcout')
  }

  clickUserMenu() {
    cy.get('[cy-test="user-menu-trigger"]').click()
    return this // Return this instance to allow method chaining
  }
  
  // Adreess form methods ------------------

  fillAdress(adress) {
    cy.get('[cy-test=adress]').type(adress)
  }

  fillCity(city) {
    cy.get('[cy-test=city]').type(city)
  }
  
  fillPincode(pincode) {
    cy.get('[cy-test=pincode]').type(pincode)
  }

  fillPhone(phone) {
    cy.get('[cy-test=phone]').type(phone)
  }

  fillNotes(notes) {
    cy.get('[cy-test=notes]').type(notes)
  }

  clickAddAddressButton(form) {
    cy.get(form).find('[cy-test="sumbit"]').click()
  }

  fillAdressForm(adress, city, pincode, phone, notes) {
    this.fillAdress(adress)
    this.fillCity(city)
    this.fillPincode(pincode)
    this.fillPhone(phone)
    this.fillNotes(notes)
  }
  
  // Address form methods end ------------------

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

export default new CheckoutPage();