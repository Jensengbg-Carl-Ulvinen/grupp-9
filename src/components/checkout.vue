<template>
<div class="checkout_page">
  <button @click="goBack()" class="previous">
    <img class="previous" src="../assets/img/arrow-down.svg" />
  </button>

</div>
</template>

<script>
export default {
  name: "CheckOut",
  data: () => {},
  computed: {},
  methods: {
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
