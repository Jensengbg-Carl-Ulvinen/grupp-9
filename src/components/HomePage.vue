<template>
  <div id="container">
      <nav class="wrapper">
        <h1 class="heading"> Webshop för iphone skal</h1>
        <button @click="openCheckOut()" class="button_checkout">
        <img class="shoppingcart" src="../assets/img/shoppingcart.png" />
      </button>
      </nav>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  data: () => {},
  computed: {},
  methods: {
    openCheckOut() {
      this.$router.push("/checkout");
    }
  }
};

</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid;
  border-color: #FA8585;
  background-color: #FA8585;
  height: 100px;
  padding: 1rem;
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
