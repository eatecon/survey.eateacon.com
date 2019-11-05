<template>
  <div class="columns is-multiline is-desktop">
    <div class="column is-full">
      <section class="hero is-primary is-small">
        <nav-bar></nav-bar>
        <div class="hero-body">
          <div class="container">
            <h1 class="title">แบบทดสอบทางความคิด และพฤติกรรมการกิน</h1>
            <h2 class="subtitle">ยินดีต้อนรับเข้าสู่ EatEcon Survey</h2>
          </div>
        </div>
      </section>
    </div>
    <div class="column is-full">
      <p class="content has-text-centered">กรุณาเลือกแบบทดสอบที่คุณสนใจ</p>
    </div>
    <div class="column">
      <b-button 
        type="is-danger is-large" 
        tag="router-link" 
        :to="{ path: '/mbti' }" 
        expanded
      >MBTI</b-button>
    </div>
    <div class="column">
      <b-button 
        type="is-info is-large" 
        tag="router-link" 
        :to="{ path: '/mindset' }" 
        expanded
      >Mindset</b-button>
    </div>
    <div class="column">
      <b-button
        type="is-primary is-large"
        tag="router-link"
        :to="{ path: '/factfulness' }"
        expanded
      >Factfulness Survey</b-button>
    </div>
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