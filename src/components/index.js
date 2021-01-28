import cart from "./cart/cart";
import Catalog from "./catalog/catalog";

export default () => {
    cart.init()
    let catalog = new Catalog('.products', cart, 'https://raw.githubusercontent.com/evsik/JavaScript/master/catalogData.json')
}