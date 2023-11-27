it('Google search', function() {

cy.visit('https://www.google.com/')
cy.get('#L2AGLb > .QS5gu').click()
cy.get('#APjFqb').type("Automation step by step")
//cy.get('#jZ2SBf > .wM6W7d > span')
cy.get('.FPdoLc > center > .gNO89b').click


//cy.get('#sb_form_q').type("Automation step by step", {enter})
//cy.get('.FPdoLc > center > .gNO89b').click()
})