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
  }
}
</script>

<style>

</style>