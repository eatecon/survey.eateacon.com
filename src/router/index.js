import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../components/pages/HomePage.vue";
import FactFulnessPage from "../components/pages/FactFulnessPage.vue";
import MBTIPage from "../components/pages/MBTIPage.vue";
import MindSetPage from "../components/pages/MindSetPage.vue";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/factfulness",
    component: FactFulnessPage,
  },
  {
    path: "/mbti",
    component: MBTIPage,
  },
  {
    path: "/mindset",
    component: MindSetPage,
  },
  {
    path: "*",
    component: HomePage,
  }
];

export const router = new VueRouter({
  mode: "history",
  routes: routeList,
});
