class CheckOutStepOnePage {    
    private firstNameTextBox: string;
    private lastNameTextBox: string;
    private postalCodeTextBox: string;
    private errorMessageField: string;
    private cancelButton: string;
    private continueButton: string;

    constructor(){
        this.firstNameTextBox = "#first-name"
        this.lastNameTextBox = "#last-name"
        this.postalCodeTextBox = "#postal-code"
        this.errorMessageField = "[data-test='error']"
        this.cancelButton = "#cancel"
        this.continueButton = "#continue"
    }

    fillInFormAndContinueShopping(){
        cy.get(this.firstNameTextBox).type("Albert")
        cy.get(this.lastNameTextBox).type("Einstein")
        cy.get(this.postalCodeTextBox).type("1234")
        this.continueShopping()
    }

    continueShopping(){
        cy.get(this.continueButton).click({force:true})
    }

}
export default CheckOutStepOnePage