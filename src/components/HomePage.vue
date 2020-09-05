<template>
  <div id="container">
      <nav class="wrapper">
        <h1 class="heading"> Webshop för iphone skal 
            <img class="cart" @click="clickCart" v-bind:src="require(`@/assets/images/shopping-cart.png`)">
        </h1>
        <div class="counter">{{cartCounter}}</div>
      </nav>
      <main>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.name}} {{product.price}}
                <button class="add-to-cart" @click="addToCart(product)"> Add to cart </button>
            </li>
        </ul>
      </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HomePage',
    //components: {ProductCart},
    data: function() {
        return {
            products: [],
            cart: [],
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
            this.$router.push("/Product-cart");
        },
        addToCart(product) {
            this.cart.push(product);
            this.cartCounter++;
            console.log(product);
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
     cursor: pointer;
}
li{
    display: flex;
    justify-content: space-between;
    list-style: none;
}
</style>>

