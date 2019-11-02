<template>
  <div class="columns is-multiline is-desktop">
    <div class="column is-full">
      <div class="hero is-small is-primary">
        <div class="hero-head">
          <nav-bar></nav-bar>
        </div>
        <div class="hero-body">
          <div class="container">
            <h1 class="title">แบบทดสอบทางความคิด และพฤติกรรมการกิน</h1>
            <h2 class="subtitle">MBTI อย่าคิดว่าฉันเหมือนเขา อย่าคิดว่าเราเหมือนกัน</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-full">
      <mulitple-choice-panel
        v-for="question in questionItems"
        :key="question.questionId"
        v-model="questionItems[question.questionId-1]"
      ></mulitple-choice-panel>
    </div>
    <div class="column is-full">
      <b-field class="buttons" position="is-centered" grouped>
        <b-button type="is-primary" @click="computeScore" rounded>คำนวณคะแนน</b-button>
        <b-button type="is-primary" @click="reset" rounded>เริ่มใหม่อีกครั้ง</b-button>
      </b-field>
    </div>
    <div class="column">
      <b-message type="is-primary" v-show="this.showScore" expanded>คะแนนรวมของคุณคือ {{ this.score }}</b-message>
      <b-field class="buttons" position="is-centered" grouped>
        <b-button size="is-small is-tall-container" icon-left="arrow-expand-up" @click="backToTop">กลับขึ้นด้านบน</b-button>
      </b-field>
    </div>
  </div>
</template>
<script>
import NavBar from "../layouts/NavBar.vue";
import MulitpleChoicePanel from "../questions/MultipleChoicePanel.vue";

import mbti from "../../store/modules/surveys/data-mbti";

export default {
  components: {
    MulitpleChoicePanel,
    NavBar
  },
  data: function() {
    return {
      score: {
        firstA: 0,
        firstB: 0,
        secondA: 0,
        secondB: 0,
        thirdA: 0,
        thirdB: 0,
        fourthA: 0,
        fourthB: 0,
      },
      showScore: true,
      questionItems: mbti.questions,

    };
  },
  methods: {
    computeScore() {
      this.questionItems.slice(0,10).forEach(item => {
        if (item.userAnswer === "A") {
          this.fourthA++;
        }

        if (item.userAnswer === "B") {
          this.fourthB++;
        }
      });

      this.$buefy.dialog.alert({
        type: "is-primary",
        title: "คะแนนรวม",
        message: "<b>คะแนนรวมของคุณคือ " + this.score + "</b>",
        confirmText: "ตกลง!",
        onConfirm: this.goToBottom,
      });

      this.showScore = true;
    },
    reset() {
      this.questionItems.forEach(item => {
        item.userAnswer = "";
        item.showAnswer = false;
      });

      this.showScore = true;
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
