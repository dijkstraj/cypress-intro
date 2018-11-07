describe('Formulier', () => {
  beforeEach(() => {
    cy.visit('https://wet-boew.github.io/v4.0-ci/demos/formvalid/formvalid-en.html');
    // De Web Experience Toolkit heeft wat tijd nodig om het formulier te laten werken
    cy.wait(500);
  });

  it('should accept correct values', () => {
    // TODO: vul alle verplichte velden in
    cy.get('input[type="submit"]').click();
    // TODO: verifieer dat er geen foutmeldingen zijn
  });

  it('should show error messages when I submit an empty form', () => {
    cy.get('input[type="submit"]').click();
    // TODO: verifieer dat er minstens 1 foutmelding is
  });

  it('should validate the email address', () => {
    cy.get('#email1').type('ongeldig adres');
    cy.get('input[type="submit"]').click();
    // TODO: verifieer dat er foutmelding is over het veld "Email address"
  });

  // TODO: test de andere velden
});
