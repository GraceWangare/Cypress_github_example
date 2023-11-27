
//expect and assert
//assert-mainly used in tdd
//expect- bdd framewrk

describe("Assertions demo", function(){

    it('Explicit Assertions test', function(){

        cy.visit('https://example.cypress.io/')
        cy.contains('get').click()
        cy.get('#query-btn')
        
        expect(true).to.be.true

        assert.equal(4, 4, 'Not equal')
        
    })

})

    