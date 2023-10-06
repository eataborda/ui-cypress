class InventoryPage{
    private addToCartSauceLabsBackpackButton: string;
    private addToCartSauceLabsBikeLightButton: string;
    private addToCartSauceLabsBoltTShirtButton: string;
    private addToCartSauceLabsFleeceJacketButton: string;
    private addToCartSauceLabsOnesieButton: string;
    private addToCartTestAllTheThingsTShirtRedButton: string;

    constructor(){
        this.addToCartSauceLabsBackpackButton = '#add-to-cart-sauce-labs-backpack'
        this.addToCartSauceLabsBikeLightButton = '#add-to-cart-sauce-labs-bike-light'
        this.addToCartSauceLabsBoltTShirtButton = '#add-to-cart-sauce-labs-bolt-t-shirt'
        this.addToCartSauceLabsFleeceJacketButton = '#add-to-cart-sauce-labs-fleece-jacket'
        this.addToCartSauceLabsOnesieButton = '#add-to-cart-sauce-labs-onesie'
        this.addToCartTestAllTheThingsTShirtRedButton = '#add-to-cart-test.allthethings()-t-shirt-(red)'
    }

    addItems(){
        cy.get(this.addToCartSauceLabsBackpackButton).click({force:true})
        cy.get(this.addToCartSauceLabsBoltTShirtButton).click({force:true})
        cy.get(this.addToCartSauceLabsFleeceJacketButton).click({force:true})
    }

}
export default InventoryPage