import Vue from "vue";
import VueRouter from "vue-router";

import ProfilePage from "../components/pages/ProfilePage.vue";
import FactFulnessPage from "../components/pages/FactFulnessPage.vue";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    component: ProfilePage,
  },
  {
    path: "/factfulness",
    component: FactFulnessPage,
  },
];

export const router = new VueRouter({
  routes: routeList,
});
