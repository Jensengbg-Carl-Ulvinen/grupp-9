import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../components/HomePage.vue"
import CheckOut from "../components/CheckOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckOut
  }
];

const router = new VueRouter({
  routes
});

export default router;
