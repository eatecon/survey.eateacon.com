import Vue from "vue";

export const mutations = {
  setSurvey(state, survey) {
      Vue.set(state, "surveys", survey);
  },
  addSurvey(state, survey) {
    let surveys = state.surveys;
    surveys.push(survey);
    Vue.set(state, "surveys", survey);
  },
  deleteSurveys(state, survey) {
    let surveys = state.surveys;
    surveys.splice(
      surveys.findIndex(
        item => {
          return item.id == survey.id;
        }), 1);
    Vue.set(state, "surveys", surveys);
  }
};
