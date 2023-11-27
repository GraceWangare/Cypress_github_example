/// <reference types="cypress" />


describe("fill in registration form", ()=>{
        it("register valid user" , ()=>{
            cy.visit('https://ineuron-courses.vercel.app/')
            cy.get('.navbar-menu-links > button').click()
            cy.get('.subLink').click()
            cy.get('#name').type("Gracetest")
            cy.get('#email').type("gracetest@gmail.com")
            cy.get('#password').type("test123")
            cy.get("input[type='checkbox']").first().click()
            cy.get("input[type='checkbox']").last().click()
            cy.get("input[type='checkbox']").eq(3).click()
            cy.get(':nth-child(2) > #gender').click()
            cy.get('#state').select("Kerala")
           
           

        })
})
