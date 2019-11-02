import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { surveys } from "./modules/surveys";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    surveys
  },
  plugins: [createPersistedState()]
});
