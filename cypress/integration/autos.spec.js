describe('Autos', () => {
  it('should return an empty list', () => {
    cy.request('http://localhost:3000/autos')
      .its('body.length')
      .should('eq', 0);
  });
});
