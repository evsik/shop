<template>
  <div>
    <form action="#" class="b-search">
      <input type="text" class="b-search__field" v-model="searchText">
      <button class="btn-search" type="submit" @click="filter">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
// import catalog from "./catalog";
import {get} from "../utils/reqs";

export default {
  data() {
    return {
      url: 'https://raw.githubusercontent.com/evsik/static/master/JSON%20files/catalog.json',
      catalogItemsFiltered: [],
      searchText: ''
    }
  },
  methods: {
    // filter() {
    //   let reg = new RegExp(this.searchText, 'i');
    //   this.catalogItemsFiltered = catalog.items.filter(item => item.product_name.match(reg));
    // }
  },
  mounted() {
    get(this.url)
        .then(data => {
          this.catalogItemsFiltered = data;
        })
  }
}
</script>

<style>

</style>