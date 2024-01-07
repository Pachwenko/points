const local = 'http://localhost:5173';

describe('template spec', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('passes', () => {
      cy.visit(`${local}`)
      // cy.url().should('equal', '/auth')
      cy.get('#email').type('test@example.com')
      cy.get('#display-name').type('Automated Tester')
      cy.get('#password').type('123points')

      cy.contains('Sign In').click()
      cy.url().should('equal', `${local}/auth`)
      cy.get('#error').should('contain', 'Invalid Login Details')
    })
  })
})