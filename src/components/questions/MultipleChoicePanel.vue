<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box notification is-primary">
          <p class="subtitle">{{ questionLabel }}</p>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent" v-for="choice in questionObject.choices" v-bind:key="choice.choiceId">
        <article class="tile is-child box">
          <b-radio
            v-model="questionObject.userAnswer"
            @click="fireChanges"
            :native-value="choice.choiceId"
          >{{ choice.text }}</b-radio>
        </article>
      </div>
    </div>
    <b-message
      type="is-danger"
      v-show="questionObject.showAnswer"
    >คำตอบที่ถูกคือ {{ questionObject.correctedAnswer }}</b-message>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data: function() {
    return {
      questionObject: this.value
    };
  },
  methods: {
    fireChanges() {
      this.$emit("input", this.questionObject);
    }
  },
  computed: {
    questionLabel() {
      return (
        this.questionObject.questionId + ". " + this.questionObject.questionText
      );
    }
  }
};
</script>