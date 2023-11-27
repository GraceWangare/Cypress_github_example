
import { LoginPage2 } from "./pages/login_page2"


const loginPage2 = new LoginPage2()

describe("All login tests", function(){

    this.beforeEach(function(){
        //for every step that has to be repeated before actual test
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it(  'Login with valid credentials', function(){

       
    
        loginPage2.enterUsername("Admin")
        loginPage2.enterPassword("admin123")
        loginPage2.clickLogin()
        cy.get('.oxd-userdropdown-name').should("be.visible")
        
    })
    
    it(  'Login with invalid credentials', function(){
    // it.only(  'Login with invalid credentials', function(){
    
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    
        loginPage2.enterUsername("Grace")
        loginPage2.enterPassword("admin123")
        loginPage2.clickLogin()
        cy.get('.oxd-userdropdown-name').should("be.visible")
    })
    

})


// to run only one test, use command "it.only"
// to skip 'it.skip'
