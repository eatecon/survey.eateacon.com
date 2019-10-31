import Vue from "vue";
import Vuex from "vuex";
import { surveys } from "./modules/surveys";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    surveys,
  }
});
