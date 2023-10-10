class CheckOutCompletePage{
    private backHomeButton: string;

    constructor(){
        this.backHomeButton = "#back-to-products"
    }

    submitBackHome(){
        cy.get(this.backHomeButton).click({force:true})
    }
}
export default CheckOutCompletePage