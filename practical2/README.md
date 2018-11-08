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

Ga verder met [squerist.spec.js]()

- Navigeer naar de website van Squerist
- klik op `Testen`
- verify header `Onze aanpak`
- klik op linker menu `Doelgericht`
- verify stukje content
- klik op linker menu `Flexibel`
- verify stukje content

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
