<template>
  <div id="app">
    <nav class="wrapper">
        <h1 class="heading"> Webshop för iphone skal 
            <img class="cart" v-bind:src="require(`@/assets/images/shopping-cart.png`)">
        </h1>
      </nav>
      <main>
        <router-view></router-view>
      </main>
  </div>
</template>

<script>

export default {
  name: 'App'
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
</style>
