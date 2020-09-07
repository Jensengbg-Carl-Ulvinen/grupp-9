import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ProductCart from '@/components/ProductCart.vue'
import checkout from '@/components/checkout.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/product-cart",
    name: "ProductCart",
    component: ProductCart
  },
  {
    path: "/checkout",
    name: "checkout",
    component: checkout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
