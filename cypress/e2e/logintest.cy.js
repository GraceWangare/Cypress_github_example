
import { LoginPage } from './pages/login_page'

const loginPage = new LoginPage()
it(  'Page object login test demo', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUsername("Admin")
    loginPage.enterPassword("admin123")
    loginPage.clickLogin()
})


