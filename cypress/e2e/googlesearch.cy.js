/// <reference types="cypress" />

it("Google search first test", function(){

    cy.log('Google first test case starts')
    cy.visit("https://www.google.com/")
    cy.get('#L2AGLb > .QS5gu').click
    cy.get('#APjFqb').type("cypres{enter}")

})