/// <reference types="cypress" />

it("File uplaod test Demo", function (){

    cy. visit("https://trytestingthis.netlify.app/")
    cy.get("#myfile").attachFile("sample-1.png")
})


it( "File 2 upload", function(){

    cy.visit("https://trytestingthis.netlify.app/")
    cy.get("#myfile").attachFile('example.json')
})