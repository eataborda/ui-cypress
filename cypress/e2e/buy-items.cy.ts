import CartPage from "../pages/CartPage"
import CheckOutCompletePage from "../pages/CheckOutCompletePage"
import CheckOutStepOnePage from "../pages/CheckOutStepOnePage"
import CheckOutStepTwoPage from "../pages/CheckOutStepTwoPage"
import HeaderComponent from "../pages/HeaderComponent"
import InventoryPage from "../pages/InventoryPage"
import LoginPage from "../pages/LoginPage"

describe('Buy items test', () => {
  const url = 'https://www.saucedemo.com/'
  let loginPage = new LoginPage()
  let inventoryPage = new InventoryPage()
  let headerComponent = new HeaderComponent()
  let cartPage = new CartPage()
  let checkoutStepOnePage = new CheckOutStepOnePage()
  let checkoutStepTwoPage = new CheckOutStepTwoPage()
  let checkOutCompletePage = new CheckOutCompletePage()

  it('Buy Items', () => {
    loginPage.visit(url)
    loginPage.login('standard_user','secret_sauce')
    inventoryPage.addItems()
    headerComponent.goToCart()
    cartPage.checkout()
    checkoutStepOnePage.fillInFormAndContinueShopping()
    checkoutStepTwoPage.submitFinish()
    checkOutCompletePage.submitBackHome()
    headerComponent.logout()
  })
})