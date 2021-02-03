import List from '../list/list';
import {BasketItem} from "../items/items";

export class Catalog extends List {
    constructor(url, container, basket) {
        super(url, container, basket);
        this.basket = basket;

        document.querySelector(this.container).addEventListener('click', evt => {
            if (evt.target.name === 'buy-btn') {
                this.basket.add(evt.target.dataset)
                console.log(evt.target.dataset)
            }
        })

    }
}

export class Basket extends List {
    constructor(url, container) {
        super(url, container);
        this.sum = 0
        this.qua = 0

        document.querySelector('#toggle-cart').addEventListener('click', () => {
            document.querySelector(".cart-block").classList.toggle('myVisible')
        })

        document.querySelector(this.container).addEventListener('click', evt => {
            if (evt.target.name === 'del-btn') {
                this.remove(evt.target.dataset.id)
            }
        })
    }

    add(product) {
        console.log(this.items)
        let find = this.items.find(item => item.id_product == product.id)
        if (!find) {
            // this.items.push(cart.createCartItem(product.id, product.name, product.price)) //потому-что дата-сет из catalog
            console.log("Этого товара нет в корзине")
        } else {
            find.quantity++
        }
        document.querySelector(this.container).innerHTML = new BasketItem(find).render();
    }

    remove(id) {
        let find = this.items.find(item => item.id_product == id)
        if (find.quantity === 1) {
            this.items.splice(this.items.indexOf(find), 1)
            console.log(this.items)
        } else {
            find.quantity--
            console.log(this.items)
        }


        // this.checkTotal()
        // let container = document.querySelector(this.container)
        // let domString = '123'
        // container.innerHTML = domString
    }

    // checkTotal() {
    //     let s = 0
    //     let q = 0
    //
    //     this.items.forEach(item => {
    //         q += item.quantity
    //         s += item.quantity * item.price
    //     })
    // }
}

