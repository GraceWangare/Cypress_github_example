
// incases where the elemnet needs to be used twice to execute an actiuon, save the object elements as variables and call them

export class LoginPage2{

   username_textbox = "input[placeholder='Username']"
   password_textbox = "input[placeholder='Password']"
   login_butoon = ".oxd-button"

    enterUsername(username){
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_butoon).click()
    }

}