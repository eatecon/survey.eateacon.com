<template>
  <div class="card">
    <nav-bar></nav-bar>
    <div class="card-content">
      <b-field grouped>
        <b-field label="คำนำหน้า">
          <b-select v-model="profile.title" placeholder="คำนำหน้า" rounded>
            <option>นาย</option>
            <option>นาง</option>
            <option>นางสาว</option>
          </b-select>
        </b-field>
        <b-field label="ชื่อ" expanded>
          <b-input v-model="profile.firstName" placeholder="ชื่อ" rounded></b-input>
        </b-field>
        <b-field label="นามสกุล" expanded>
          <b-input v-model="profile.lastName" placeholder="นามสกุล" rounded></b-input>
        </b-field>
      </b-field>
      <b-field grouped>
        <b-field label="วัน/เดือน/ปีเกิด">
          <b-datepicker
            v-model="profile.birthday"
            placeholder="โปรดเลือก..."
            icon="calendar-today"
            rounded
          ></b-datepicker>
        </b-field>
      </b-field>
    </div>
  </div>
</template>
<script>
import NavBar from "../layouts/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data: function() {
    return {
      profile: {
        citizenId: 0,
        prefix: "",
        firstName: "",
        lastName: "",
        birthday: null,
      }
    };
  }
};
</script>