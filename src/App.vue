<template>
  <div id="app">
    <nav class="wrapper">
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
</style>
