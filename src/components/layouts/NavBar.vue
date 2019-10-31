<template>
  <div class="card-content">
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Profile</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/factfulness' }">Fact Fulness Survey</b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>
<script>
</script>