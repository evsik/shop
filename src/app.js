
 let app = new Vue({
    el: '#app',
    data: {
        //здесь все "переменные", которые связаны с реактивным поведением (перерендером)
        catalogUrl: "https://raw.githubusercontent.com/evsik/static/master/JSON%20files/catalog.json",
        cartUrl: "https://raw.githubusercontent.com/evsik/static/master/JSON%20files/basket.json",
        catalogItems: [],
        catalogItemsFiltered: [],
        cartItems: [],
        catalogShown: false,
        searchText: ''
    },
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        },
        add(product) {
            console.log('Куплен товар: ' + product.product_name);

            let find = this.cartItems.find(item => item.id_product == product.id_product)
            if (!find) {
                // this.items.push(cart.createCartItem(product.id, product.name, product.price)) //потому-что дата-сет из catalog
                this.cartItems.push(product)
                let lastItem = this.cartItems[this.cartItems.length - 1]
                lastItem.quantity = 1
                console.log(product)
            } else {
                find.quantity++
                console.log(this.cartItems)
            }
            // this.checkTotal()
            // this.render()
        },
        remove(product) {
            let id = product.id_product
            let find = this.cartItems.find(item => item.id_product === id)
            if (find.quantity === 1) {
                this.cartItems.splice(this.cartItems.indexOf(find), 1)
                console.log(id)
            } else {
                find.quantity--
                console.log(this.cartItems)
            }
        },

        filter() {
            let reg = new RegExp(this.searchText, 'i');
            this.catalogItemsFiltered = this.catalogItems.filter(item => item.product_name.match(reg));
        }
    },
    // watch: {
    //     //следящие
    // },

    //хуки жизненного цикла
    mounted() {
        this.get(this.catalogUrl).then(data => {
            this.catalogItems = data;
            this.catalogItemsFiltered = data;
        })
        this.get(this.cartUrl).then(data => {
            this.cartItems = data.content;
            console.log(this.cartItems)
        })
    },

})
 // export default app