// <reference types="Cypress" />

// Login Test Suite

describe ('Assignment', function () 
{
  beforeEach(()=>{
    cy.visit(Cypress.config ('login_url'))

  })

//TC 1
it('Login OK', function()
{
// Test Steps
cy.get(Cypress.config ('mainLoginButton')).click()
cy.get(Cypress.config ('emailField'))
  .type(Cypress.config ('emailValue'))
  .should("have.value", Cypress.config ('emailValue'))
cy.get(Cypress.config ('passField'))
  .type(Cypress.config ('passValue'))
cy.get(Cypress.config ('loginButton')).click()
cy.get(Cypress.config('signInHeaderField'))
.should("contain", "Welcome, Federico. It's time to complete your profile.")
// logging out
cy.get(Cypress.config ('settingsButton')).click()
cy.get(Cypress.config ('logoutButton')).click()

})

//TC 2
it('Login with a non registered user' , function()
{
// Test Steps
cy.get(Cypress.config ('mainLoginButton')).click()
cy.get(Cypress.config ('emailField'))
  .type(Cypress.config ('nonregisteredUserValue'))
  cy.get(Cypress.config ('passField'))
  .type(Cypress.config ('passValue'))
cy.get(Cypress.config ('loginButton')).click()
cy.get(Cypress.config('invalidUserMessageField'))
.should("contain", "The provided information is not correct. Click 'Forgot Password?' to reset your password.")
})

//TC 3
it('Login with EMPTY credentials' , function()
{
// Test Steps
cy.get(Cypress.config ('mainLoginButton')).click()
cy.get(Cypress.config ('loginButton')).click()
cy.get(Cypress.config('emailWarningMessageField'))
.should("contain", "This cannot be empty")
cy.get(Cypress.config('passwordWarningMessageField'))
.should("contain", "The password field cannot be empty")
})


//TC 4
it('Login with an invalid email address' , function()
{
// Test Steps
cy.get(Cypress.config ('mainLoginButton')).click()
cy.get(Cypress.config ('emailField'))
  .type(Cypress.config ('invalidUserValue'))
  cy.get(Cypress.config ('passField'))
  .type(Cypress.config ('passValue'))
cy.get(Cypress.config ('loginButton')).click()
cy.get(Cypress.config('emailWarningMessageField'))
.should("contain", "This doesn't look like a valid email")
})

})
