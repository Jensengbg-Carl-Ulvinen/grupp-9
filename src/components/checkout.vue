<template>
  <div class="checkout_page">
      <div class="order_wrapper">
        <h1>Din beställning</h1>

        <li class="order_list" v-for="items in cart" :key="items.id">

          <div class="title_items">
            <h2>{{ items.title }}</h2>
          </div>

          <div class="items_price">
            <p>{{ items.price * items.quantity }}kr</p>
            <div class="arrow">
              <div class="vertical">
                <img @click="addProd(items)" src="../assets/img/arrow-up.svg" />
                <h2>{{ items.quantity }}</h2>
                <img @click="delProd(items)" src="../assets/img/arrow-down.svg" />
              </div>
            </div>
          </div>

        </li>

        <div class="total">
          <h2 class="total_text">Total</h2>
        </div>

        <h2 class="total_price">{{ sum }} kr</h2>

        <div class="button">

          <button @click="sendOrder(cart)" class="button_checkout">Beställ!</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "CheckOut",
  components: { },
  data() { },
  computed: {
    cart() {
      return this.$store.state.order.cart;
    },
    sum() {
      let sum = 0;
      this.cart.forEach(order => (sum += order.totPrice));
      return sum;
    }
  },
  methods: {
   addProd(items) {
      this.$store.commit("addProd", items);
    },
    delProd(items) {
      this.$store.commit("delProd", items);
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
