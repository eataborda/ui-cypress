class CartPage{
    private cartItem: string;
    private continueShoppingButton: string;
    private checkoutButton: string;
    private removeSauceLabsBackpack: string;
    private removeSauceLabsFleeceJacket: string;
    private removeSauceLabsBoltTShirt: string;

    constructor(){
        this.cartItem = ".cart_item"
        this.continueShoppingButton = "#continue-shopping"
        this.checkoutButton = "#checkout"
        this.removeSauceLabsBackpack = "#remove-sauce-labs-backpack"
        this.removeSauceLabsFleeceJacket = "#remove-sauce-labs-fleece-jacket"
        this.removeSauceLabsBoltTShirt = "#remove-sauce-labs-bolt-t-shirt"
    }

    checkout(){        
        cy.get(this.checkoutButton).click({force:true})
    }
}
export default CartPage