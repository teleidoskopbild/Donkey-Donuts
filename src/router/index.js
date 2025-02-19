import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Donuts from "../views/Donuts.vue";
import ColdDrinks from "../views/ColdDrinks.vue";
import WarmBeverages from "../views/WarmBeverages.vue";
import Rolls from "../views/Rolls.vue";
import Cookies from "../views/Cookies.vue";

const routes = [
  {
    path: "/",
    redirect: "/donuts",
  },
  {
    path: "/donuts",
    name: "Donuts",
    component: Donuts,
  },
  {
    path: "/rolls",
    name: "Rolls",
    component: Rolls,
  },
  {
    path: "/cookies",
    name: "Cookies",
    component: Cookies,
  },
  {
    path: "/cold-drinks",
    name: "ColdDrinks",
    component: ColdDrinks,
  },
  {
    path: "/warm-beverages",
    name: "WarmBeverages",
    component: WarmBeverages,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
