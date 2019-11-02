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
      <b-message type="is-primary" v-show="this.showScore" expanded>คะแนนรวมของคุณคือ {{ fourLetterScore }}</b-message>
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
      score: [
        { start: 0, stop: 10, letterA: "E", letterB: "I", priorityLetter: "I", sumA: 0, sumB: 0, result: "" },
        { start: 10, stop: 20, letterA: "S", letterB: "N", priorityLetter: "N", sumA: 0, sumB: 0, result: "" },
        { start: 20, stop: 30, letterA: "T", letterB: "F", priorityLetter: "F", sumA: 0, sumB: 0, result: "" },
        { start: 30, stop: 40, letterA: "J", letterB: "P", priorityLetter: "P", sumA: 0, sumB: 0, result: "" },
      ],
      fourLetterScore: "XXXX",
      showScore: false,
      questionItems: mbti.questions,
    };
  },
  methods: {
    computeScore() {
      this.score.forEach(letter => {
        this.questionItems.slice(letter.start, letter.stop)
          .forEach(item => {
            if (item.userAnswer === "A") {
              letter.sumA++;
            }

            if (item.userAnswer === "B") {
              letter.sumB++;
            }
          });
        
        letter.result = "X";

        if (letter.sumA > letter.sumB) {
          letter.result = letter.letterA;
        }

        if (letter.sumB > letter.sumA) {
          letter.result = letter.letterB;
        }

        if (letter.sumA === letter.sumB && letter.sumA != 0 && letter.sumB != 0) {
          letter.result = letter.priorityLetter;
        }
      });

      this.fourLetterScore = "";
      this.score.forEach(item => this.fourLetterScore = this.fourLetterScore + item.result);
      this.showScore = true;

      this.$buefy.dialog.alert({
        type: "is-primary",
        title: "ผลการประเมิน MBTI",
        message: "<b>Type Indicator ของคุณคือ " + this.fourLetterScore + "</b>",
        confirmText: "ตกลง!",
        onConfirm: this.goToBottom,
      });
    },
    reset() {
      this.questionItems.forEach(item => {
        item.userAnswer = "";
        item.showAnswer = false;
      });

      this.fourLetterScore = "";
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
