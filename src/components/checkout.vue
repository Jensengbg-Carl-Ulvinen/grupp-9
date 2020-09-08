<template>

  <div class="ordercheckout">



  <div class="orderHeader">
    <h1>Din beställning</h1>
    <button @click="goBack()" class="previous">
      <img class="previous" src="../assets/images/back.png" /></button>
  </div>

   <li class="order_list" v-for="product in cart" :key="product.id">
    <div class="title_product">
      <h2>{{ product.name }}</h2>
    </div>

    <div class="product_price">
      <p>{{ product.price * product.quantity }}kr</p>
      <div class="arrow">
        <div class="vertical">
          <img @click="addProd(product)" src="../assets/images/arrow-up.svg" />
          <h2>{{ product.quantity }}</h2>
          <img @click="delProd(product)" src="../assets/images/arrow-down.svg" />
        </div>
      </div>
    </div>
  </li>

  <div class="total">
    <h2 class="total_text">Total</h2>
    <h2 class="total_price">{{ sum }} kr</h2>
    <p id="delInfo">Leverans inom 1-4 arbetsdagar inom Sverige</p>
  </div>

  <div class="button">
    <button @click="sendOrder()" class="button_checkout">Beställ</button>
  </div>
</div>

</template>

<script>

 export default {
    name: "CheckOut",
   // data: () => {},
   // computed: {
   //    sum() {
   //      let sum = 0;
   //      this.cart.forEach(order => (sum += order.totPrice));
   //      return sum;
   //    }
   // },
   methods: {
     goBack() {
       this.$router.push("/");
     },
     // addProd(product) {
     //   this.cart.push("addProd", product);
     // },
     // delProd(product) {
     //   this.$delete("delProd", product);
     // },
     sendOrder() {
       this.$router.push("/orderconfirmation") // Not created yet -Carl
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

button{
  height: 40px;
  padding: 0.5rem;

  border-radius: 5px;
}

.previous{
  border: none !important;
  background: white;
}

.button_checkout{
  font-size: 20px;
  backgound: red !important;
  cursor: pointer;
}

.orderHeader{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.total{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 6rem;
}

img{
  width: 30px;
  height: 30px;
}
</style>
