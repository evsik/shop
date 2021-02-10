<template>
  <div>
    <header class="header">
      <div class="header-wrapper container">
        <div class="b-logo">
          <h1>
            E-SHOP
          </h1>
        </div>
        <!--search-comp-->
<!--        <search/>-->
        <!--basket-comp-->
        <basket ref="bask"/>
      </div>
    </header>

    <main class="main" id="main">
      <catalog @add="addItem"/>
    </main>
  </div>
</template>

<script>
import search from '../components/search.vue';
import catalog from '../components/catalog.vue';
import basket from '../components/basket.vue';

export default {
  components: {
    basket,
    catalog
    // search
  },
  data() {
    return {
      // showBasket: false
    }
  },
  methods: {
    parentGet(url) {
      return fetch(url).then(data => data.json())
    },
    addItem(item) {
      this.$refs.bask.add(item);
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style>

</style>