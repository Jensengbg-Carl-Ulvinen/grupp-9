<template>
  <div id="app">
    <home-page/>
    <checkout/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import CheckOut from './components/CheckOut.vue';
export default {
  name: 'App',
  components: {
    HomePage,
    CheckOut
  }
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
