describe('Home', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
  });

  it('should be named Kitchen Sink', () => {
    cy.get('h1').should('have.text', 'Kitchen Sink');
  });

  it('should have a section on Utilities', () => {
    cy.get('h2').contains('Utilities');
  });
});
