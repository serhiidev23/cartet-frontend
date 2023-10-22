import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import Sign from "./components/Sign.vue";
import Verification from "./components/Verification.vue";
import CartCreate from "./components/CartCreate.vue";
import CartResell from "./components/CartResell.vue";
import CartList from "./components/CartList.vue";
import CartListResale from "./components/CartListResale.vue";
import CartCombination from "./components/CartCombination.vue";
import CartSale from "./components/CartSale.vue";
import EmailList from "./components/EmailList.vue";

const routes = [
  { path: "/homepage", component: HomePage },
  { path: "/sign", component: Sign },
  { path: "/", component: Sign },
  { path: "/verify", component: Verification },
  { path: "/email", component: EmailList },
  { path: "/cart/create", component: CartCreate },
  { path: "/cart/resell", component: CartResell },
  { path: "/cart/list/sale", component: CartList },
  { path: "/cart/list/resale", component: CartListResale },
  { path: "/cart/com", component: CartCombination },
  { path: "/cart/sale", component: CartSale },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  base: "/",
  routes: routes,
});

const app = createApp(App).use(router).mount("#app");
