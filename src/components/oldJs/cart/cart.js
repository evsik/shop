let cart = {
    items: [],
    shown: false,
    sum: 0,
    qua: 0,
    container: '.cart-block',
    itemsContainer: '.cart-block__items',
    createCartItem(id, name, price) {
        return {
            id_product: id,
            price: +price,
            product_name: name,
            quantity: 1,
            img: 'http://placehold.it/100x80',
            createTemplate() {
                return `
                    <div class="b-item_cart" data-id="${this.id_product}">
                        <img src="${this.img}" alt="${this.product_name}" width="100" height="80" class="b-item__img_cart">
                        <div class="b-item__desc_cart">
                            <p class="b-item__name_cart">${this.product_name}</p>
                            <p class="b-item__quantity_cart">${this.quantity}</p>
                            <p class="b-item__price_cart">${this.price}</p>
                        </div>
                        <div class="right-block">
                            <p class="product-price">$${this.price * this.quantity}</p>
                            <button name="del-btn" class="b-item__delete_cart" data-id="${this.id_product}">&times;</button>
                        </div>
                    </div>
                    `
            }
        }
    },
    init() {
        document.querySelector('#toggle-cart').addEventListener('click', () => {
            cart.shown = !cart.shown
            cart.render()
            document.querySelector('.cart-block').classList.toggle('myVisible')
        })

        document.querySelector(this.container).addEventListener('click', evt => {
            if (evt.target.name === 'del-btn') {
                this.removeProduct(evt.target.dataset.id)
            }
        })
    },
    render() {
        let container = document.querySelector(this.itemsContainer)
        let domString = ''

        this.items.forEach(item => {
            domString += item.createTemplate()
        })
        container.innerHTML = domString

        document.querySelector('#tot-sum').innerHTML = this.sum
        document.querySelector('#tot-qua').innerHTML = this.qua
    },
    addProduct(product) {
        let find = this.items.find(item => item.id_product === product.id)
        if (!find) {
            this.items.push(cart.createCartItem(product.id, product.name, product.price)) //потому-что дата-сет из catalog
        } else {
            find.quantity++
        }
        this.checkTotal()
        this.render()
    },
    removeProduct(id) {
        let find = this.items.find(item => item.id_product === id)
        if (find.quantity === 1) {
            this.items.splice(this.items.indexOf(find), 1)
        } else {
            find.quantity--
        }
        this.checkTotal()
        this.render()
    },
    checkTotal() {
        let s = 0
        let q = 0

        this.items.forEach(item => {
            q += item.quantity
            s += item.quantity * item.price
        })

        this.sum = s
        this.qua = q
    },
}

export default cart