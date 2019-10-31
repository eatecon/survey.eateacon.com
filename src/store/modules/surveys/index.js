import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  surveys: [],
  status: null,
};

const namespaced = true;

export const surveys = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
