describe('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('should have an email field', () => {
    cy.get('.action-email')
      .should('have.value', '')
      .type('hello@cypress.io')
      .should('have.value', 'hello@cypress.io')
  });
});
