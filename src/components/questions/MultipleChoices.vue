<template>
  <div class="box">
    <b-field v-bind:label="questionLabel"></b-field>
    <b-field class="buttons" v-for="choice in questionObject.choices" v-bind:key="choice.choiceId">
      <b-radio-button
        v-model="questionObject.userAnswer"
        @click="fireChanges"
        :native-value="choice.choiceId"
      >{{ choice.choiceId + ". " + choice.text }}</b-radio-button>
    </b-field>
    <b-message type="is-danger" v-show="questionObject.showAnswer">
      คำตอบที่ถูกคือ  {{ questionObject.correctedAnswer }}
    </b-message>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data: function() {
    return {
      questionObject: this.value,
    };
  },
  methods: {
    fireChanges() {
      this.$emit("input", this.questionObject);
    },
  },
  computed: {
    questionLabel() {
      return this.questionObject.questionId + '. ' + this.questionObject.questionText;
    },
  },
};
</script>