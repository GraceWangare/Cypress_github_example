



describe("Url verification", function(){

    it.skip('Assertions test', function(){

        cy.visit('https://example.cypress.io/')
        cy.contains('get').click()
        cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')
        .and('be.visible')
    
        // Other assertions
        // .should('have.text')
         //have.html
         
    
        // after using should more than one time , we can replace it with "and

    })
    
       
    it("orangedemo assertions", function(){
            //positive assertions
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("include", "orangehrmlive.com") /// include is a  should keyword while the next line is a text of what you expect
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("contain", "orangehrmlive")
       
        // textS
    
        //negative assertions

        cy.url().should("not.contain", "hakuna matata")

        //capture title
        cy.title().should("include", "OrangeHRM")


    })

})
