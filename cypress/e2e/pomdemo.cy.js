

it(  'Page object demo', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')

    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get(".oxd-button").click()
        

})