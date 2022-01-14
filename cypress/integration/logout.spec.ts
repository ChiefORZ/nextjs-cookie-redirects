/// <reference types="cypress" />

// @ts-ignore
describe('Logout', () => {
  it('should logout correctly', () => {
    cy.visit('/auth/login');
    cy.contains('#app', 'Logged In!');

    cy.visit('/auth/logout');
    cy.contains('#app', 'Logged Out!');
  });
});
