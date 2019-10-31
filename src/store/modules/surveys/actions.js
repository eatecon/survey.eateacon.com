export const actions = {
  getSurveys() {
    
  },
  addSurvey(context, survey){
    context.commit("addSurvey", survey);
  },
  deleteSurvey(context, survey){
    context.commit("deleteSurvey", survey);
  }
};
