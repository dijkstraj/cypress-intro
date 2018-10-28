describe('Comments', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('https://example.cypress.io/commands/network-requests');
  });

  it('should display the body of the comment', () => {
    cy.route('GET', '/comments/*', {
      body: 'Success is a science; if you have the conditions, you get the result.'
    });
    cy.get('.network-btn.btn-primary').click();
    cy.get('.network-comment')
      .should('have.text', 'Success is a science; if you have the conditions, you get the result.');
  });
});
