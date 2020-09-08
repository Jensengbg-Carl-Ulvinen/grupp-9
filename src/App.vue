<template>
  <div id="app">
    <home-page/>
    <ProductCart /> 
    <!-- <transition name="">
      <ProductCart v-if="openProdCart" @closeProdCart="prodCart" class="prodCartOverlay" />
    </transition> -->
    <ProductCart/>
    <CheckOut/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import ProductCart from './components/ProductCart.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    ProductCart
  }
   // data() {
  //   return {
  //     openProdCart: false
  //   };
  // },
  // methods: {
  //   prodCart() {
  //     if (this.openProdCart === true) {
  //       this.openProdCart = false;
  //     } else {
  //       this.openProdCart = true;
  //     }
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
