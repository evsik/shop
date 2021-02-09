<template>

  <div class="products container">
    <item
        v-for="item of items"
        :key="item.id_product"
        :item="item"
    />
  </div>

</template>

<script>
import item from './item.vue';
import { get } from '../utils/reqs.js';

export default {
  components: { item },
  data() {
    return {
      url: 'https://raw.githubusercontent.com/evsik/static/master/JSON%20files/catalog.json',
      items: []
    }
  },
  mounted() {
    get(this.url)
        .then(data => { this.items = data })
  }
}
</script>

<style>

</style>