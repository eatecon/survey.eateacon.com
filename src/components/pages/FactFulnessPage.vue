<template>
  <div class="columns is-multiline is-desktop">
    <div class="column is-full">
      <section class="hero is-primary is-small">
        <nav-bar></nav-bar>
        <div class="hero-body">
          <div class="container">
            <h1 class="title">แบบทดสอบทางความคิด และพฤติกรรมการกิน</h1>
            <h2 class="subtitle">จริงๆ แล้วโลกดีขึ้นทุกวัน คุณเชื่อหรือไม่?</h2>
          </div>
        </div>
      </section>
    </div>
    <div class="column">
      <mulitple-choices
        v-for="question in questionItems"
        :key="question.questionId"
        v-model="questionItems[question.questionId-1]"
      ></mulitple-choices>
    </div>
    <b-field class="buttons" position="is-centered" grouped>
      <b-button type="is-primary" @click="computeScore" rounded>คำนวณคะแนน</b-button>
      <b-button type="is-primary" @click="reset" rounded>เริ่มใหม่อีกครั้ง</b-button>
    </b-field>
    <b-message type="is-primary" v-show="this.showScore" expanded>คะแนนรวมของคุณคือ {{ this.score }}</b-message>
    <b-field class="buttons" position="is-centered" grouped>
      <b-button size="is-small" icon-left="arrow-expand-up" @click="backToTop">กลับขึ้นด้านบน</b-button>
    </b-field>
  </div>
</template>
<script>
import NavBar from "../layouts/NavBar.vue";
import MulitpleChoices from "../questions/MultipleChoices.vue";

import factfulness from "../../store/modules/surveys/data-factfulness";

export default {
  components: {
    MulitpleChoices,
    NavBar
  },
  data: function() {
    return {
      score: 0,
      showScore: false,
      questionItems: factfulness.questions
    };
  },
  methods: {
    computeScore() {
      this.score = this.questionItems.filter(
        item => item.correctedAnswer === item.userAnswer
      ).length;

      this.questionItems.forEach(item => (item.showAnswer = true));
      this.showScore = true;

      this.$buefy.dialog.alert({
        type: "is-primary",
        title: "คะแนนรวม",
        message: "<b>คะแนนรวมของคุณคือ " + this.score + "</b>",
        confirmText: "ปิดหน้าต่างนี้!",
        onConfirm: this.goToBottom,
      });
    },
    reset() {
      this.questionItems.forEach(item => {
        item.userAnswer = "";
        item.showAnswer = false;
      });

      this.showScore = false;
    },
    backToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    },
    goToBottom() {
      window.scrollTo(
        0, 
        document.body.scrollHeight || document.documentElement.scrollHeight
      );
    }
  }
};
</script>
