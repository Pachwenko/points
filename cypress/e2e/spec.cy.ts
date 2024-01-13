const local = 'http://localhost:4173';

describe('Login Integration Tests', () => {
	context('desktop tests', () => {
		beforeEach(() => {
			cy.viewport(1280, 720);
		});

		it('redirects to home page after successful login', () => {
			cy.visit(`${local}`);
			cy.url().should('contain', '/auth');
			cy.get('#email').type('test@example.com');
			cy.get('#password').type('123points');

			cy.get('[data-test-id="sign-in"]').click();
			cy.url().should('equal', `${local}/`);
		});

		it('redirects to next url after successful login', () => {
			// This is the scenario where a user was invited, they would land at this page!
			// see similar test for the points page
			cy.visit(`${local}/auth?next=${local}/points/91bc1d3b-718f-4e80-a6f5-2b11bc21bd6b`);
			cy.url().should('contain', '/auth');
			cy.get('#email').type('test@example.com');
			cy.get('#password').type('123points');

			cy.get('[data-test-id="sign-in"]').click();
			cy.url().should('equal', `${local}/points/91bc1d3b-718f-4e80-a6f5-2b11bc21bd6b`);
		});

		it('shows invalid login credentials with wrong password', () => {
			cy.visit(`${local}`);
			cy.url().should('contain', '/auth');
			cy.get('#email').type('test@example.com');
			cy.get('#password').type('bogus1234');

			cy.get('[data-test-id="sign-in"]').click();
			cy.url().should('contain', `${local}/auth`);
			cy.get('[data-test-id="error-message"]').should('have.text', 'Invalid login credentials');
		});

		it('shows invalid login credentials with wrong email', () => {
			cy.visit(`${local}`);
			cy.url().should('contain', '/auth');
			cy.get('#email').type('bogus@example.com');
			cy.get('#password').type('123points');

			cy.get('[data-test-id="sign-in"]').click();
			cy.url().should('contain', `${local}/auth`);
			cy.get('[data-test-id="error-message"]').should('have.text', 'Invalid login credentials');
		});

		it('shows missing field error when missing email', () => {
			cy.visit(`${local}`);
			cy.url().should('contain', '/auth');
			// cy.get('#email').type('bogus@example.com')
			cy.get('#password').type('123points');

			cy.get('[data-test-id="sign-in"]').click();
			cy.url().should('contain', `${local}/auth`);
			cy.get('[data-test-id="error-message"]').should(
				'have.text',
				'Please enter your email and password to log in.'
			);
		});

		it('shows missing field error when missing password', () => {
			cy.visit(`${local}`);
			cy.url().should('contain', '/auth');
			cy.get('#email').type('bogus@example.com');
			// cy.get('#password').type('123points')

			cy.get('[data-test-id="sign-in"]').click();
			cy.url().should('contain', `${local}/auth`);
			cy.get('[data-test-id="error-message"]').should(
				'have.text',
				'Please enter your email and password to log in.'
			);
		});
	});
});

// describe('Sign Up Integration Tests', () => {
// 	context('desktop tests', () => {
// 		beforeEach(() => {
// 			cy.viewport(1280, 720);
// 		});

// 		it('shows missing field error when missing display name', () => {
// 			cy.visit(`${local}`);
// 			cy.url().should('contain', '/auth');
// 			cy.get('#email').type('bogus@example.com');
// 			// cy.get('#display-name').type('Automated Tester')
// 			cy.get('#password').type('bogus123');

// 			cy.get('[data-test-id="sign-in"]').click();
// 			cy.url().should('contain', `${local}/auth`);
// 			cy.get('[data-test-id="error-message"]').should(
// 				'have.text',
// 				'Please enter all fields to sign up.'
// 			);
// 		});
// 	});
// });
