/// <reference types="cypress" />


//implicit assertions. They are built in, supported by cypress directly.(should, and)
it('Assertions test', function(){
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should("contain", "Button")
        .should("have.class", 'query-btn btn btn-primary')
        .should('be.visible')
        //.should('be.disabled') this assertion will faile becasue the button is enabled
        // assertions can be chained using "and" after using should sevral times
        .and


})