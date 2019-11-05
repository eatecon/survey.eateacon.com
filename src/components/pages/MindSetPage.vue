<template>
  <div class="columns is-multiline is-desktop">
    <div class="column is-full">
      <section class="hero is-primary is-small">
        <nav-bar></nav-bar>
        <div class="hero-body">
          <div class="container">
            <h1 class="title">แบบทดสอบทางความคิด และพฤติกรรมการกิน</h1>
            <h2 class="subtitle">พัฒนากรอบคิด ใช้ความคิดเอาชนะโชคชะตา</h2>
          </div>
        </div>
      </section>
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
        <b-button type="is-primary" @click="computeScore" rounded>ประเมินกรอบคิด</b-button>
        <b-button type="is-primary" @click="reset" rounded>เริ่มใหม่อีกครั้ง</b-button>
      </b-field>
      <b-message type="is-primary" v-show="this.showScore" expanded> {{ this.score.message }}</b-message>
      <b-field class="buttons" position="is-centered" grouped>
        <b-button size="is-small" icon-left="arrow-expand-up" @click="backToTop">กลับขึ้นด้านบน</b-button>
      </b-field>
    </div>
  </div>
</template>
<script>
import NavBar from "../layouts/NavBar.vue";
import MulitpleChoicePanel from "../questions/MultipleChoicePanel.vue";

import mindset from "../../store/modules/surveys/data-mindset";

export default {
  components: {
    MulitpleChoicePanel,
    NavBar
  },
  data: function() {
    return {
      score: {
        cognitiveGrowthMindset: false,
        traitsGrowthMindset: false,
        message: "",
      },
      showScore: false,
      questionItems: mindset.questions
    };
  },
  methods: {
    computeScore() {
      if (this.questionItems.some(item => item.userAnswer === "")) {
        this.$buefy.dialog.alert({
          type: "is-warning",
          title: "คำเตือน",
          message: "กรุณาตอบคำถามให้ครบทุกข้อ",
          confirmText: "ปิดหน้าต่างนี้!",
          onConfirm: this.goToBottom,
        });

        return;
      }

      this.score.cognitiveGrowthMindset = this.questionItems
        .slice(0,2)
        .every(item => {
          return item.userAnswer === "B";
      });

      this.score.traitsGrowthMindset = this.questionItems
        .slice(2,4)
        .every(item => {
          return item.userAnswer === "B";
      });

      this.score.message = "คุณมีกรอบคิดเกี่ยวกับสติปัญญา" 
          + (this.score.cognitiveGrowthMindset ? " \"แบบยืดหยุ่น\"" : "\"แบบตายตัว\"")
          + " และกรอบคิดเกี่ยวกับบุคลิกภาพ "
          + (this.score.traitsGrowthMindset ? "\"แบบยืดหยุ่น\"" : "\"แบบตายตัว\"");

      this.$buefy.dialog.alert({
        type: "is-primary",
        title: "ผลการประเมิน",
        message: this.score.message,
        confirmText: "ปิดหน้าต่างนี้!",
        onConfirm: this.goToBottom,
      });

      this.showScore = true;
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
