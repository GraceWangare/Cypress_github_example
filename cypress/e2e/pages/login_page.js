
export class LoginPage{

   
    enterUsername(username){
        cy.get("input[placeholder='Username']").type(username)
    }

    enterPassword(password){
        cy.get("input[placeholder='Password']").type(password)
    }

    clickLogin(){
        cy.get(".oxd-button").click()
    }

}