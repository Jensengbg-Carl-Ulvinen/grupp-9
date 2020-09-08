<template>
  <div id="container">
      <nav class="wrapper">
        <h1 class="heading"> Webshop för iphone skal 
            <img class="cart" v-bind:src="require(`@/assets/images/shopping-cart.png`)">
        </h1>
        <div class="counter">{{cartCounter}}</div>
      </nav>
      <main class="main"> 
        <ul>
            <li v-for="product in products" :key="product.id">
               <img class="iphone" @click="clickCart(product.id)" v-bind:src="require(`@/assets/images/iphone8-shell.jpg`)">
                {{product.name}} {{product.price}}
                <!--<button class="add-to-cart" @click="clickCart(product.id)"> Add to cart </button>-->
            </li>
        </ul>
      </main>
      <footer class="footer">
          <h3>Contact copyright</h3>
      </footer>
  </div>
</template>

<script>
import data from '../server/db.json'
export default {
    name: 'HomePage',
    data: function() {
        return {
            products: data['products'],
            cart: [],
            cartCounter: 0,
            openCart: false
        };
    },
    methods: {
        clickCart(productId) {
            this.$router.push({path:`/product-cart/${productId}`});
        }
      /* async addToCart(product) {
           await this.cart.push(product);
            this.cartCounter++;
            let JSONprod = JSON.stringify(this.cart);
            localStorage.setItem('cart', JSONprod);
            console.log(JSON.parse(localStorage['cart']));
            console.log(product);
        }*/
    }
}
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
.main{
    margin-bottom: 10%;
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
    flex-direction: row;
    list-style: none;
}
.iphone{
    width: 10%;
    height: auto;
        cursor: pointer;
}
.footer{
    border-top: solid;
    border-color: #FA8585;
    background-color: #FA8585;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    word-spacing: 3 rem;
}
</style>>

