<template>
  <b-tab title="Sign in">
    <form>
      <b-form-group class="mt-2" label="Username:" label-for="loginUsername">
        <b-form-input
          placeholder="your email/username"
          id="loginUsername"
          v-model="loginUsername"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Password:" label-for="loginPassword">
        <b-form-input
          placeholder="your password"
          id="loginPassword"
          type="password"
          v-model="loginPassword"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button class="form-btn mt-2" @click.prevent="login"
          >Sign in</b-button
        >
      </div>
    </form>
  </b-tab>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      isLoggedIn: false,
      confirmPassword: "",
      loginUsername: "",
      loginPassword: "",
    };
  },
  methods: {
    login() {
      // Xử lý đăng nhập ở đây
      axios
        .post(
          "/api/login",
          {
            loginUsername: this.loginUsername,
            loginPassword: this.loginPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          this.isLoggedIn = true;
          this.$router.push({ name: "User", params: { id: 123 } });
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message;
        });
    },
  },
};
</script>
<style></style>
