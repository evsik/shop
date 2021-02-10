<template>
  <div class="b-cart">
    <button class="btn-cart" id="toggle-cart" type="button" @click="catalogShown = !catalogShown">Корзина
    </button>
    <div class="cart-block" v-if="catalogShown">
      <div class="d-flex flex-row justify-content-between">
        <b class="d-block">Общая стоимость:</b> <span class="d-block" id="tot-sum">  </span>
      </div>
      <hr>
      <div class="cart-block__items">
        <item
            v-for="item of items"
            type="basket"
            :item="item"
            :key="item.id_product"
            @remove="remove"
        />
      </div>
      <hr>
      <div class="d-flex flex-row justify-content-between">
        <b class="d-block">Количество:</b> <span class="d-block" id="tot-qua">  </span>
      </div>
    </div>
  </div>
</template>

<script>
import item from './item.vue';
import {
  get,
  put,
  del,
  post
} from '../utils/reqs.js';

export default {
  components: {item},
  data() {
    return {
      url: '/api/basket',
      items: [],
      catalogShown: false
    }
  },
  mounted() {
    this.$parent.parentGet(this.url)
        .then(data => {
          this.items = data.content
        })
  },
  methods: {
    add(item) {
      let find = this.items.find(el => el.id_product == item.id_product)
      if (!find) {
        let newItem = Object.assign({}, item, {
          quantity: 1
        });
        post(this.url, newItem)
            .then(res => {
              if (res.status) {
                this.items.push(newItem)
              } else {
                console.log('Server err')
              }
            })
      } else {
        put(`${this.url}/${item.id_product}`, 1)
            .then(res => {
              if (res.status) {
                find.quantity++
              } else {
                console.log('Server err')
              }
            })
      }
    },
    remove(item) {
      let find = this.items.find(el => el.id_product == item.id_product);
      if (find.quantity > 1) {
        put(`${this.url}/${item.id_product}`, -1)
            .then(res => {
              if (res.status) {
                find.quantity--
              } else {
                console.log('Server err')
              }
            })
      } else {
        del(`${this.url}/${item.id_product}`)
            .then(res => {
              if (res.status) {
                this.items.splice(this.items.indexOf(find), 1);
              } else {
                console.log('Server err')
              }
            })
      }
    },
  }
}
</script>

<style>

</style>