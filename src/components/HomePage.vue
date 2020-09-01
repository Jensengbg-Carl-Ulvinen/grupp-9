<template>
  <div id="container">
      <nav class="wrapper">
        <h1 class="heading"> Webshop för iphone skal</h1>
      </nav>
      <main>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.name}}
            </li>
        </ul>
      </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function() {
        return {
            products: []
        };
    },
    async created() {
        try {
            const res = await axios.get(`http://localhost:3000/products`);
            this.products = res.data;
        } catch (e) {
            console.log(e);
        }
    }
}
</script>

<style scoped>
.heading {
    display: flex;
    border-bottom: solid;
    border-color: #FA8585;
    background-color: #FA8585;
}
li{
    display: flex;
    justify-content: space-between;
    list-style: none;
}
</style>>

