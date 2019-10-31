import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../components/pages/HomePage.vue";
import ProfilePage from "../components/pages/ProfilePage.vue";
import FactFulnessPage from "../components/pages/FactFulnessPage.vue";

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
    path: "/profile",
    component: ProfilePage,
  },
];

export const router = new VueRouter({
  mode: "history",
  routes: routeList,
});
