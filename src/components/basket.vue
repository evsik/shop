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

export default {
  components: {item},
  data() {
    return {
      url: 'https://raw.githubusercontent.com/evsik/static/master/JSON%20files/basket.json',
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
        this.items.push(Object.assign(item, {quantity: 1}))
      } else {
        find.quantity++
      }
    },
    remove(item) {
      let find = this.items.find(el => el.id_product == item.id_product)
      if (find.quantity > 1) {
        find.quantity--
      } else {
        this.items.splice(this.items.indexOf(find), 1)
      }
    }
  }
}
</script>

<style>

</style>