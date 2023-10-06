class LoginPage{
    private userName: string;
    private password: string;
    private loginButton: string;

    constructor(){
        this.userName = '#user-name'
        this.password = '#password'
        this.loginButton = '#login-button'
    }

    visit(url: string){
        cy.visit(url)
    }

    login(user: string, password: string){
        cy.get(this.userName).type(user)
        cy.get(this.password).type(password)
        cy.get(this.loginButton).click({force:true})
    }
}
export default LoginPage