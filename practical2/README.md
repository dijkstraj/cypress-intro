# Cypress

Begin met het downloaden van [het voorbeeldproject](https://github.com/dijkstraj/cypress-intro).

![Voorbeeldproject downloaden](download-base.png)

Pak de zip uit op schijf en open een commandline in de map cypress-intro-master die je net gemaakt hebt.
Installeer de benodigde afhankelijkheden met:

```bash
npm install
```

Start vervolgens de testrunner met:

```bash
npm run test
```

## Squerist

Om in een bekende omgeving te wennen aan Cypress gaan we wat simpele tests doen op de website van Squerist.
Er is een beginnetje gemaakt in [squerist.spec.js](https://github.com/dijkstraj/cypress-intro/blob/master/cypress/integration/squerist.spec.js),
de eerste stap is er al.
Binnen de `it` gaan we de test aanvullen,
doe dit door telkens 1 handeling en 1 controle toe te voegen en niet alle stappen in 1x,
zodat het goed te volgen is.

- **Navigeer** naar de website van Squerist
- **Klik** op `Testen`
- **Verifieer** dat de titel *Onze aanpak* bevat.
- **Klik** op het linker menu `Doelgericht`(*hint: dit element heeft id 2*)
- **Verifieer** dat de tekst *Volgens Squerist kunnen er met testen verschillende doelen behaald worden* aanwezig is op de pagina.
- **Klik** op het linker menu `Flexibel`
- **Verifieer** dat er nergens *squerist* geschreven wordt, dat moet tenslotte met een hoofdletter.

Mocht je er niet uitkomen een aantal tips:

- Naar een pagina navigeren doen we met `cy.visit`. Zie de [documentatie](https://docs.cypress.io/api/commands/visit.html#Syntax).
- Een element op de pagina opvragen (zodat we er iets mee kunnen doen) doen we met `cy.get`. Zie de [documentatie](https://docs.cypress.io/api/commands/get.html#Syntax).
- Soms is het lastig om de *selector* van een element te vinden. De [Selector Playground](https://docs.cypress.io/guides/core-concepts/test-runner.html#Selector-Playground) kan dan van pas komen. Deze tool levert vaak niet de mooiste (kortste) selectors op dus het advies is om dit niet als primaire aanpak te gebruiken.
- Klikken op een element: `.click` Zie de [documentatie](https://docs.cypress.io/api/commands/click.html#Syntax).
- Eigenschappen van een element verifiëren kan met `.should`, zie de [documentatie](https://docs.cypress.io/api/commands/should.html#Syntax) voor het gebruik. Should gebruikt *assertions*, kijk eens naar de [common assertions](https://docs.cypress.io/guides/references/assertions.html#Common-Assertions).
- De [FAQ](https://docs.cypress.io/faq/questions/using-cypress-faq.html) van Cypress kan ook van pas komen als je op de bovenstaande pagina's niet vindt wat je zoekt.
- Van de genoemde technieken zijn ook simpele voorbeelden te zien in [home.spec.js](https://github.com/dijkstraj/cypress-intro/blob/master/cypress/integration/home.spec.js).

Bonus:
Op de `Onze aanpak` pagina staan in de tekst ook linkjes naar de subpagina's. Maak een nieuwe test waarmee je test of die linkjes werken en naar dezelfde pagina leiden.

## Google

Open [google.spec.js](https://github.com/dijkstraj/cypress-intro/blob/master/cypress/integration/google.spec.js) in de testrunner en in een tekst editor.

De test bevat een fout en faalt.
Herstel de fout en zorg dat de test op groen komt.

Maak nu ook tests die verifiëren dat de zoekmachines [DuckDuckGo](https://duckduckgo.com)
en [WolframAlpha](https://www.wolframalpha.com) het juiste antwoord ook kennen.

> Tip: In tegenstelling tot Google gebruiken deze zoekmachines allebei een duidelijk
> `id` attribuut voor het zoekveld.
> Je kunt deze dus makkelijk met [`cy.get('#id')`](https://docs.cypress.io/api/commands/get.html)
> selecteren in de test.

Maak tot slot een test die checkt dat ook [Bing](https://www.bing.com)
het antwoord in de zoekresultaten heeft staan.

## Formulier

We gebruiken voor het testen van een formulier een site met
[een voorbeeld van formuliervalidatie](https://wet-boew.github.io/v4.0-ci/demos/formvalid/formvalid-en.html).

Open [formulier.spec.js](https://github.com/dijkstraj/cypress-intro/blob/master/cypress/integration/formulier.spec.js) in de testrunner en in een tekst editor.

Het navigeren naar de voorbeeldpagina is al geïmplementeerd.
Je ziet ook al een drietal tests staan, maak deze af.

> Gebruik hiervoor de volgende commando's:
>
> * [`type('stukje tekst')`](https://docs.cypress.io/api/commands/type.html) om een _stukje tekst_ te typen
> * [`select('optie')`](https://docs.cypress.io/api/commands/type.html) om _optie_ te selecteren in een dropdown
> * [`check('optie')`](https://docs.cypress.io/api/commands/type.html) om _optie_ aan te vinken
> * [`click()`](https://docs.cypress.io/api/commands/type.html) om op een knop te klikken

Vul tot slot de tests aan totdat alle velden die foutmeldingen kunnen opleveren getest zijn.
