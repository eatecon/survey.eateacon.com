<template>
  <div>
    <section class="hero is-primary">
      <nav-bar></nav-bar>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">แบบทดสอบทางความคิด และพฤติกรรมการกิน</h1>
          <h2 class="subtitle">ยินดีต้อนรับเข้าสู่ EatEcon Survey</h2>
        </div>
      </div>
    </section>
    <div class="level">
      <p class="level-item has-text-centered">
        กรุณาเลือกแบบทดสอบที่คุณสนใจ
      </p>
    </div>
    <b-field class="buttons are-large">
      <b-button
        type="is-primary"
        tag="router-link"
        :to="{ path: '/factfulness' }"
        expanded
      >Factfulness Survey</b-button>
      <b-button type="is-primary" expanded>MBTI (Coming Soon)</b-button>
    </b-field>
  </div>
</template>
<script>
import NavBar from "../layouts/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>