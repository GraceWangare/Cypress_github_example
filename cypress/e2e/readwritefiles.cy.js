before(function(){

    cy.fixture("example.json").as("test_data")
})

it("Read files using fixture", function(){

    cy.fixture("example.json").then((datafile) => {
        cy.log(datafile.name)
        cy.log(datafile.email)

        cy.log(this.test_data.name)


    })
})


it("Read file readfile", function(){

    cy.readFile("./cypress/fixtures/example.json").then((data3) =>{
        cy.log(data3.name)
    })
    
})

