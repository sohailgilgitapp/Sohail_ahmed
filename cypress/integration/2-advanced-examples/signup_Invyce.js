describe('InvyceSignupSuit', function()
{
  // Test case one
  it('Verify login page content', function()
  {
    
    cy.visit("http://192.168.6.22:5000/page/signup")
    cy.get('#fullName').type('Shahab')
    cy.get('#username').type('shahab')
    cy.get('#email').type('shahab@gmail.com')
    cy.get('#country').type('Pakistan')
    cy.get('span').contains('Pakistan').click()
    cy.get('#phoneNumber').type('03464959899')
    cy.get('[type="password"]').type('passpass')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
      
  })
})

describe('AddOrganisation', function(){
  it('Verify add organisation page', function(){
    cy.get('#name').type('Gilgit Paint Point')
    cy.get('#email').type('gilgitpaintpoint@gmail.com')
    cy.get('#faxNumber').type('10011')
    cy.get('#phoneNumber').type('355543009')
    cy.get('#website').type('http://www.gilgitpaintpoint.com')
    cy.get('#country').type('Pakistan')
    cy.get('span').contains('Pakistan').click()
    cy.get('#city').type('Gilgit')
    cy.get('#postalCode').type('15100')
    // cy.get('#financialEnding').click()
    // cy.get('[type="button"]').click()
    // cy.get('[title="2022-12"]').click()
    cy.fixtures('image/logo.jpg').as('logo')
    cy.get('.ant-upload').then(function ($input){
      const blob = Cypress.Blob.base64StringToBlob(this.logo, 'image/jpg')
      $input.fileupload('add', {file: blob})
    })
    cy.get('[type="submit"]').click()

  })
})