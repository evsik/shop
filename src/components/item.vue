<template>
  <div>
    <template v-if="type == 'catalog'">
      <div class="products__item">
        <div class="b-item">
          <img :src="item.img" alt="" class="b-item__img">
          <div class="b-desc">
            <h3 class="b-item__name">{{ item.product_name }}</h3>
            <p class="b-item__price"> {{ item.price }} </p>
            <button class="buy-btn"
                    @click="add(item)"
                    name="buy-btn">
              Купить
            </button>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type == 'basket'">
      <div class="item-wrapper">
        <div class="b-item_cart">
          <img :src="item.img" alt="" width="100" height="80" class="b-item__img_cart">
          <div class="b-item__desc_cart">
            <p class="b-item__name_cart">{{ item.product_name }}</p>
            <p class="b-item__quantity_cart">{{ item.quantity }}</p>
            <p class="b-item__price_cart">{{ item.price }}</p>
          </div>
          <div class="right-block">
            <p class="product-price">{{ item.price * item.quantity }}</p>
            <button name="del-btn"
                    @click="remove(item)"
                    class="b-item__delete_cart">
              &times;
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'catalog'
    },
    item: {type: Object}
  }
}
</script>

<style>

</style>