describe('Google', () => {
  beforeEach(() => {
    // Given I visit Google
    cy.visit('https://www.google.com');
  });

  it('should find the answer to life the universe and everything', () => {
    // When I search for "answer to life the universe and everything"
    cy.get('.sbibtd input').first() // <-- search field
      .type('answer to life the universe and everything')
      .type('{enter}');

    // Then I get 42
    cy.get('#cwo') // <-- output field of calculator
      .should('have.text', '42');
  });
});
