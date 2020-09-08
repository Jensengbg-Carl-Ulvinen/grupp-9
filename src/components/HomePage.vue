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
               <!-- <img class="iphone" v-bind:src="require(`@assets/images/iphone8-shell.jpg`)">-->
                {{product.name}} {{product.price}}
                <button class="add-to-cart" @click="clickCart(product.id)"> Add to cart </button>
            </li>
        </ul>
        <router-view></router-view>
      </main>
      <footer class="footer">
          <h3>Contact copyright</h3>
      </footer>
  </div>
</template>

<script>
import axios from 'axios'
import data from '../server/db.json'
export default {
    name: 'HomePage',
    // components: { ProductCart },
    data: function() {
        return {
            products: data['products'],
            cart: [],
            cartCounter: 0,
            openCart: false
        };
    },
    async created() {
        try {
            const res = await axios.get(`http://localhost:8080/products`);
            this.products = res.data;
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        clickCart(productId) {
            this.$router.push({path: `/product-cart/${productId}`});
        },
       async addToCart(product) {
           await this.cart.push(product);
            this.cartCounter++;
            let JSONprod = JSON.stringify(this.cart);
            localStorage.setItem('cart', JSONprod);
            console.log(JSON.parse(localStorage['cart']));
            console.log(product);
        }
    }
  };

</script>

<style scoped>
body {
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
.cart {
    width: 2%;
    height: auto;
    float: right;
    padding-right: 1rem;
    cursor: pointer;
}
li {
    display: flex;
    justify-content: space-between;
    list-style: none;
}

.button_checkout{
  border: none !important;
  cursor: pointer;
  background-color: #FA8585;
  height: 50px;
  width: 50px;
}

.button_checkout img{
  height: 20px;
  width: 20px;
}

</style>>
