describe('Squerist', () => {
  beforeEach(() => {
    cy.visit('https://www.squerist.nl/');
  });

  it('should be browsable', () => {
    cy.get('.item115 > .item').contains('Testen').click();
    cy.get('.gk-active > :nth-child(1) > strong').should('have.text', 'Onze aanpak');

    cy.get('.gkTabsNav').contains('Doelgericht').click();
    cy.get('body').should('contain', 'Volgens Squerist kunnen er met testen verschillende doelen behaald worden');

    cy.get('.gkTabsNav').contains('Flexibel').click();
    cy.get('body').should('not.contain', 'squerist');
    // TODO: navigeer door het topmenu en linkermenu
    // TODO: verifieer dat de inhoud klopt met het gekozen menuitem
  });
});
