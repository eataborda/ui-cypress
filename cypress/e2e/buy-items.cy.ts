import InventoryPage from "../pages/InventoryPage"
import LoginPage from "../pages/LoginPage"

describe('Buy items test', () => {
  const url = 'https://www.saucedemo.com/'
  let loginPage = new LoginPage()
  let inventoryPage = new InventoryPage()

  it('Buy Items', () => {
    loginPage.visit(url)
    loginPage.login('standard_user','secret_sauce')
    inventoryPage.addItems()
  })
})