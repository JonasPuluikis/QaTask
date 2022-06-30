describe(' Test suite to test Bankera provided endpoint', function () {

    it('Test json response body structure for currency exchange (USD to BTC) & validate exchanging currencies ', function () {
        cy.request({
            method: 'GET',
            url: 'https://spectrocoin.com/scapi/ticker/usd/btc',
            body: {}

        }).then(function (response) {
            expect(response.status).to.eql(200);
            expect(response.body).not.to.be.null;
            expect(response.body).have.property("currencyFrom","USD");
            expect(response.body).have.property("currencyFromScale");
            expect(response.body).have.property("currencyTo","BTC");
            expect(response.body).have.property("currencyToScale");
            expect(response.body).have.property("last");
            expect(response.body).have.property("lastHP");
            expect(response.body).have.property("timestamp");
            expect(response.body).have.property("friendlyLast");

        })

    });
});