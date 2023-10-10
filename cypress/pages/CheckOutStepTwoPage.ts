class CheckOutStepTwoPage {
    private finishButton: string;

    constructor(){
        this.finishButton = "#finish"
    }

    submitFinish(){
        cy.get(this.finishButton).click({force:true})
    }
}
export default CheckOutStepTwoPage