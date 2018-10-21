describe('Autos', () => {
  beforeEach(() => {
    cy.request('DELETE', '/autos');
  });

  it('should return an empty list', () => {
    cy.request('/autos')
      .its('body.length')
      .should('eq', 0);
  });

  it('should add an auto', () => {
    cy.request('POST', '/autos', {merk: 'Cypress'})
      .its('body')
      .should('eq', 'Cypress toegevoegd met id 1');
  });
});
