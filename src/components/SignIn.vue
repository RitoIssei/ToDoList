<template>
  <div title="Sign in">
    <div style="font-size: 18px; margin: 24px 0" class="text-center">
      Sign in
    </div>
    <form class="mt-3">
      <b-form-group class="mt-2" label="Username:" label-for="loginUsername">
        <b-form-input
          class="shadow-none"
          :state="state"
          @blur="onBlur"
          placeholder="your email/username"
          id="loginUsername"
          v-model="loginUsername"
        ></b-form-input>
        <div style="color: #dc3545" v-show="state === false">
          Please enter something
        </div>
      </b-form-group>
      <b-form-group class="mt-2" label="Password:" label-for="loginPassword">
        <b-form-input
          class="shadow-none"
          :state="state1"
          @blur="onBlur1"
          placeholder="your password"
          id="loginPassword"
          type="password"
          v-model="loginPassword"
        ></b-form-input>
        <div style="color: #dc3545" v-show="state1 === false">
          Please enter something
        </div>
      </b-form-group>
      <b-button
        variant="success"
        style="width: 100%"
        class="mt-3"
        @click.prevent="register"
        >Sign in</b-button
      >
    </form>
  </div>
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
      state: null,
      state1: null,
    };
  },
  methods: {
    onBlur() {
      this.state = this.loginUsername === "" ? false : true;
    },
    onBlur1() {
      this.state1 = this.loginPassword === "" ? false : true;
    },
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
