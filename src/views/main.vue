<template>
  <div>
    <header class="header">
      <div class="header-wrapper container">
        <div class="b-logo">
          <h1>
            E-SHOP
          </h1>
        </div>
              <form action="#" class="b-search">
                <input type="text" class="b-search__field" v-model="searchText">
                <button class="btn-search" type="submit" @click="filter">
                  <i class="fas fa-search"></i>
                </button>
              </form>
        <!--basket-comp-->
        <basket />
      </div>
    </header>

    <main class="main" id="main">
      <catalog />
    </main>
  </div>
</template>

<script>
import catalog from '../components/catalog.vue';
import basket from '../components/basket.vue';

export default {
  components: {
    basket,
    catalog
  },
  data() {
    return {
      // showBasket: false
    }
  },
  methods: {
    parentGet(url) {
      return fetch(url).then(data => data.json())
    }
  }
}
</script>

<style>

</style>