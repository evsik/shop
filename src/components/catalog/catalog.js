
class Catalog {
    constructor(container, cart, catalogUrl) {
        this.items = []
        this.cart = cart
        this.container = container
        this.catalogUrl = catalogUrl
        this.init()
    }

    createProduct(product) {
        return {
            product_name: product.product_name,
            price: product.price,
            id_product: product.id_product,
            img: 'https://placehold.it/200x150',
            createTemplate() {
                return `
                        <div class="b-item" data-id="${this.id_product}">
                            <img src="${this.img}" alt="${this.product_name}" class="b-item__img">
                            <div class="b-desc">
                                <h3 class="b-item__name">${this.product_name}</h3>
                                <p class="b-item__price"> ${this.price} </p>
                                <button class="buy-btn"
                                    name="buy-btn"
                                    data-id="${this.id_product}"
                                    data-name="${this.product_name}"
                                    data-price="${this.price}">
                                    Купить
                                </button>
                            </div>
                        </div>
                    `
            }
        }
    }
    init() {
        this.items = []
        this.getData(this.catalogUrl)
            .finally(() => {
                this._fetchItems()
                this._render()
            })

        document.querySelector(this.container).addEventListener('click', evt => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct(evt.target.dataset)
            }
        })
    }
    getData(url) {
        return fetch(url)
            .then(data => data.json())
            .then((data2) => {
                this.items = data2
            })
    }
    _fetchItems() {
        let arr = []

        this.items.forEach(item => {
            arr.push(this.createProduct(item))
        })
        console.log(arr)
        this.items = arr
    }
    _render() {
        let container = document.querySelector(this.container)
        let domString = ''

        this.items.forEach(item => {
            domString += item.createTemplate()
        })
        container.innerHTML = domString
    }
}


// let catalog = {
//     items: [],
//     container: '.products',
//     cart: null,
//     catalogUrl: 'https://raw.githubusercontent.com/evsik/JavaScript/master/catalogData.json',
//     createProduct(product) {
//         return {
//             product_name: product.product_name,
//             price: product.price,
//             id_product: product.id_product,
//             img: 'https://placehold.it/200x150',
//             createTemplate() {
//                 return `
//                         <div class="b-item" data-id="${this.id_product}">
//                             <img src="${this.img}" alt="${this.product_name}" class="b-item__img">
//                             <div class="b-desc">
//                                 <h3 class="b-item__name">${this.product_name}</h3>
//                                 <p class="b-item__price"> ${this.price} </p>
//                                 <button class="buy-btn"
//                                     name="buy-btn"
//                                     data-id="${this.id_product}"
//                                     data-name="${this.product_name}"
//                                     data-price="${this.price}">
//                                     Купить
//                                 </button>
//                             </div>
//                         </div>
//                     `
//             }
//         }
//     },
//     init() {
//         this.items = []
//         this.cart = cart
//         this.getData(this.catalogUrl)
//             .finally(() => {
//                 this._fetchItems()
//                 this._render()
//             })
//
//         document.querySelector(this.container).addEventListener('click', evt => {
//             if (evt.target.name === 'buy-btn') {
//                 this.cart.addProduct(evt.target.dataset)
//             }
//         })
//     }
//     ,
//     getData(url) {
//         return fetch(url)
//             .then(data => data.json())
//             .then((data2) => {
//                 this.items = data2
//             })
//     }
//     ,
//     _fetchItems() {
//         let arr = []
//
//         this.items.forEach(item => {
//             arr.push(catalog.createProduct(item))
//         })
//         console.log(arr)
//         this.items = arr
//     }
//     ,
//     _render() {
//         let container = document.querySelector(this.container)
//         let domString = ''
//
//         this.items.forEach(item => {
//             domString += item.createTemplate()
//         })
//         container.innerHTML = domString
//     }
// }

export default Catalog