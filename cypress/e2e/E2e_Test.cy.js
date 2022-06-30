

describe('E2E test for Bankera', function () {
    it('Test to select EUR currency & check if Bitcoin rate change was positive in last 24 hours', function () {

        //If test passses Bitcoin rate change was positive
        //If fails negative

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Navigation to website & assertion of url.
        cy.visit('https://spectrocoin.com/en/bitcoin-price-rates.html')
        cy.url().should('eql', 'https://spectrocoin.com/en/bitcoin-price-rates.html')
        cy.wait(2000)

        //Assert dropdown exists, click on modal & click on "EUR" selection.
        cy.get('#currency-select').should('exist')
            .click()
        cy.get('#react-select-5-option-0').click()
        cy.get('#currency-select > div > div.css-1t2fvrz > div').should('contain.text','EUR')

        //Scroll into Bitcoin view & assert its visible.
        cy.get('#gatsby-focus-wrapper > div > main > div > section.tm > div.eo > table > tbody > tr:nth-child(7)').scrollIntoView()
        cy.contains('Bitcoin').should('be.visible')

        //Get Bitcoin rate text, parse it to Float , assert its a number & assert its value is greater than 0.
        cy.get('#gatsby-focus-wrapper > div > main > div > section.tm > div.eo > table > tbody > tr:nth-child(7) > td:nth-child(3) > div.Os.Ps')
            .invoke('text')
            .then(cy.log)
            .then(parseFloat)
            .should('be.a', 'number')
            .should('be.gt',0)
    });
});