class HeaderComponent{
    private burguerMenuButton: string;
    private shoppingCartContainer: string;
    private allItemsLink: string;
    private aboutLink: string;
    private logoutLink: string;
    private resetAppStateLink: string;

    private productSortCointainer: string;

    constructor(){
        this.burguerMenuButton = "#react-burger-menu-btn"
        this.shoppingCartContainer = "[class='shopping_cart_link']"
        this.allItemsLink = "#inventory_sidebar_link"
        this.aboutLink = "#about_sidebar_link"
        this.logoutLink = "#logout_sidebar_link"
        this.resetAppStateLink = "#reset_sidebar_link"

        this.productSortCointainer = ".product_sort_container"
    }

    goToCart(){
        cy.get(this.shoppingCartContainer).click({force:true})
    }

    logout(){
        cy.get(this.burguerMenuButton).click({force:true})
        cy.get(this.logoutLink).click({force:true})
    }
}
export default HeaderComponent