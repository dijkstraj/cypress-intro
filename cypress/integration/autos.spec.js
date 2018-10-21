describe('Autos', () => {
  beforeEach(() => {
    cy.request('DELETE', 'http://localhost:3000/autos');
  });

  it('should return an empty list', () => {
    cy.request('http://localhost:3000/autos')
      .its('body.length')
      .should('eq', 0);
  });

  it('should add an auto', () => {
    cy.request('POST', 'http://localhost:3000/autos', {merk: 'Cypress'})
      .its('body')
      .should('eq', 'Cypress toegevoegd met id 1');
  });
});
