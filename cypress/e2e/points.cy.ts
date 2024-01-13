import { createClient } from '@supabase/supabase-js';
import { resolve } from 'cypress/types/bluebird';

const PUBLIC_SUPABASE_URL = 'https://otnrjsuiprjpbjvwsyrv.supabase.co';
const PUBLIC_SUPABASE_ANON_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90bnJqc3VpcHJqcGJqdndzeXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1OTkzODcsImV4cCI6MjAxODE3NTM4N30.RZp9Y6FAhq9M2QK7AAq0eLsq-9QZ0kUZIKfS0Q8M-MM';
const LOCAL = 'http://localhost:4173';
const SESSION_ID = 'a2bbd73f-2ce0-4786-bc40-20992b8cdcd6';
const TEST_USER_ID = '7b21d2f5-1740-43d3-b257-7451a9bd4b61';
const EMAIL = 'test@example.com'
const PASSWORD = '123points'

// Create a single supabase client for interacting with your database

function signIn() {
	cy.visit(`${LOCAL}/auth`);
	cy.url().should('contain', '/auth');
	cy.get('#email').type('test@example.com');
	cy.get('#password').type('123points');

	cy.get('[data-test-id="sign-in"]').click();
}

async function createSupabaseClient() {
    await client.auth
        .signInWithPassword({
            email: 'test@example.com',
            password: '123points'
        })
    return client;
}

describe('Pointing Multiplayer Tests', () => {
	// Instead of driving multiple browsers, we can
	// use the supabase client to mimic real scenarios

	context('desktop tests', () => {
		beforeEach(() => {
			cy.viewport(1280, 720);
		});

		it('other user vote shows on my page', async () => {
			cy.visit(`${LOCAL}/auth?next=${LOCAL}/points/${SESSION_ID}`);
			cy.url().should('contain', '/auth');
			cy.get('#email').click();
			cy.get('#email').type('test@example.com');
			cy.get('#password').click();
			cy.get('#password').type('123points');
			cy.get('[data-test-id="sign-in"]').click().then(() => {
                cy.url().should('equal', `${LOCAL}/points/${SESSION_ID}`).then(() => {
                    cy.get(`[data-test-id="user-${TEST_USER_ID}"]`).should('have.text', 'Automated Tester:  ');

                    const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
                    supabase.auth.signInWithPassword({
                        email: EMAIL,
                        password: PASSWORD
                    }).then((authResponse) => {
                        supabase
                            .from('PointingSession')
                            .update({
                                game_state: {
                                    version: 1,
                                    activePlayers: {
                                        '7b21d2f5-1740-43d3-b257-7451a9bd4b61': {
                                            id: TEST_USER_ID,
                                            currentVote: '',
                                            displayName: 'Automated Tester'
                                        },
                                        '1234': {
                                            id: '1234',
                                            currentVote: '1',
                                            displayName: 'Another Tester'
                                        }
                                    }
                                }
                            })
                            .eq('id', SESSION_ID)
                            .select()
                            .single()
                            .then((updatedSession) => {
                                console.log('UPDATED GAME STATE', updatedSession);
                                cy.get(`[data-test-id="user-1234"]`).should('have.text', 'Another Tester: 1');
                            });
                    })
                });
            });
		});
	});
});
