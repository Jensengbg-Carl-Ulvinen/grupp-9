import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ProductCart from '@/components/ProductCart.vue'
import CheckOut from '@/components/CheckOut.vue'
import OrderConfirmation from '@/components/OrderConfirmation.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/product-cart/:productId",
    name: "ProductCart",
    component: ProductCart
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckOut
  },
  {
    path: "/orderconfirmation",
    name: "orderconfirmation",
    component: OrderConfirmation
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
