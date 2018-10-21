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

  it('should require field merk', () => {
    cy.request({
      method: 'POST',
      url: '/autos',
      body: {bouwjaar: 2010},
      failOnStatusCode: false
    }).should(response => {
      expect(response.status).to.eq(500);
      expect(response.body).to.contain('Auto moet minstens een merk bevatten');
    });
  });
});
