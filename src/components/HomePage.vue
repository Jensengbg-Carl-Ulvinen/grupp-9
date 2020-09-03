<template>
  <div id="container">
      <nav class="wrapper">
        <h1 class="heading"> Webshop för iphone skal 
            <img class="cart" @click="openCart" v-bind:src="require(`@/assets/images/shopping-cart.png`)">
        </h1>
        <div class="counter">{{cartCounter}}</div>
      </nav>
      <main>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.name}} {{product.price}}
            </li>
        </ul>
      </main>
      <ProductCart/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    //components: {ProductCart},
    data: function() {
        return {
            products: [],
            cartCounter: 0,
            openCart: false
        };
    },
    async created() {
        try {
            const res = await axios.get(`http://localhost:3000/products`);
            this.products = res.data;
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        clickCart() {
            if (this.openCart === true) {
                this.openCart = false;
            } else {
                this.openCart = true;
            }
        }
    }
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
}
.heading {
    border-bottom: solid;
    border-color: #FA8585;
    background-color: #FA8585;
    margin: 0;
    padding-top: 1.5rem;
    margin-left: -0.5rem;
    position: fixed;
    top: 0;
    width: 100%;
    text-align: left;
}
.cart{
     width: 2%;
     height: auto;
     float: right;
     padding-right: 1rem;
}
li{
    display: flex;
    justify-content: space-between;
    list-style: none;
}
</style>>

