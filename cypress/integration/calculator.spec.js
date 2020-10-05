/**
 * 1. Run the Calculator: yarn start / npm start
 * 2. Run the Cypress Test Runner: yarn cypress / npm run cypress
 * 3. Write more tests for the calculator
 * 4. Run the tests in the Cypress window
 */

context('Calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('views', () => {
    it('checks the root component is visible', () => {
      cy.get('.component-app').should('be.visible')
    })
  })
})
