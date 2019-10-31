<template>
  <div class="card-content">
    <b-field v-bind:label="questionLabel"></b-field>
    <b-field grouped>
      <b-field v-for="choice in questionObject.choices" v-bind:key="choice.choiceId">
        <b-radio-button
          @click.native="revealAnswer"
          v-model="radio"
          v-bind:native-value="choice.choiceId"
        >{{ choice.choiceId + ". " + choice.text }}</b-radio-button>
      </b-field>
    </b-field>
    <b-field 
      custom-class="has-text-danger"
      v-show="showAnswer" 
      v-bind:label="'คำตอบที่ถูกคือ ' + questionObject.correctedAnswer" 
    ></b-field>
  </div>
</template>
<script>
export default {
  props: {
    questionId: Number,
    questionObject: Object
  },
  data: function() {
    return {
      radio: 0,
      showAnswer: false,
    };
  },
  methods: {
    revealAnswer() {
      this.showAnswer = true;
    }
  },
  computed: {
    questionLabel() {
      return this.questionObject.questionId + '. ' + this.questionObject.questionText;
    }
  }
};
</script>