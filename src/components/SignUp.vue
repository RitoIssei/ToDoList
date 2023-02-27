<template>
  <b-tab title="Sign up">
    <form>
      <b-form-group class="mt-2" label="Email:" label-for="email-input">
        <b-form-input
          placeholder="your email"
          id="email-input"
          type="email"
          v-model="user.email"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Username:" label-for="username-input">
        <b-form-input
          placeholder="your username"
          id="username-input"
          v-model="user.username"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password-input">
        <b-form-input
          placeholder="your password"
          id="password-input"
          type="password"
          v-model="user.password"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Re Enter Password:" label-for="confirmPassword">
        <b-form-input
          placeholder="re enter your password"
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button class="form-btn mt-2" @click.prevent="register"
          >Sign up</b-button
        >
      </div>
    </form>
  </b-tab>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        email: "",
        username: "",
        password: "",
      },
      isLoggedIn: false,
      confirmPassword: "",
    };
  },
  methods: {
    register() {
      if (this.user.password !== this.confirmPassword) {
        alert("Password does not match!");
        return;
      } else {
        // Gửi yêu cầu đăng ký tài khoản đến server
        console.log(this.user);
        axios
          .post(
            "http://localhost:3000/user",
            {
              name: this.user.username,
              email: this.user.email,
              password: this.user.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>
<style></style>
