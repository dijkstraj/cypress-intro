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

  it('should point to a page on Actions', () => {
    cy.get('.home-list a').contains('Actions').click();
  });
});
