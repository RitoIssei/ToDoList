<template>
  <div title="Sign up">
    <div style="font-size: 18px; margin: 24px 0" class="text-center">
      Sign in
    </div>
    <form class="mt-3">
      <b-form-group class="mt-2" label="Email:" label-for="email-input">
        <b-form-input
          class="shadow-none"
          :state="state"
          @blur="onBlur"
          placeholder="your email"
          id="email-input"
          type="email"
          v-model="user.email"
        ></b-form-input>
        <div style="color: #dc3545" v-show="state === false">
          Please enter something
        </div>
      </b-form-group>
      <b-form-group class="mt-2" label="Username:" label-for="username-input">
        <b-form-input
          class="shadow-none"
          :state="state1"
          @blur="onBlur1"
          placeholder="your username"
          id="username-input"
          v-model="user.nickname"
        ></b-form-input>
        <div style="color: #dc3545" v-show="state1 === false">
          Please enter something
        </div>
      </b-form-group>
      <b-form-group class="mt-2" label="Password:" label-for="password-input">
        <b-form-input
          class="shadow-none"
          :state="state2"
          @blur="onBlur2"
          placeholder="your password"
          id="password-input"
          type="password"
          v-model="user.password"
        ></b-form-input>
      </b-form-group>
      <div style="color: #dc3545" v-show="state2 === false">
        Please enter something
      </div>
      <b-form-group
        class="mt-2"
        label="Re Enter Password:"
        label-for="confirmPassword"
      >
        <b-form-input
          class="shadow-none"
          :state="state3"
          @blur="onBlur3"
          placeholder="re enter your password"
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
        ></b-form-input>
        <div style="color: #dc3545" v-show="state3 === false">
          Password does not match!
        </div>
      </b-form-group>
      <b-button
        variant="success "
        style="width: 100%"
        class="mt-3"
        @click.prevent="register"
        >Sign up</b-button
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        email: "",
        nickname: "",
        password: "",
      },
      isLoggedIn: false,
      confirmPassword: "",
      state: null,
      state1: null,
      state2: null,
      state3: null,
    };
  },
  methods: {
    onBlur() {
      this.state = this.user.email === "" ? false : true;
    },
    onBlur1() {
      this.state1 = this.user.username === "" ? false : true;
    },
    onBlur2() {
      this.state2 = this.user.password === "" ? false : true;
    },
    onBlur3() {
      this.state3 = this.user.email === this.user.password ? false : true;
    },
    register() {
      if (this.user.password !== this.confirmPassword) {
        alert("Password does not match!");
        return;
      } else {
        // Gửi yêu cầu đăng ký tài khoản đến server
        console.log(this.user);
        const data = { user: this.user };
        this.$store.dispatch("UserModule/apiRegister", data).then((result) => {
          if (result.success) {
            this.$router.push({
              name: "User",
              params: { username: this.user.nickname },
            });
          } else {
            console.log(result.error);
          }
        });
      }
    },
  },
};
</script>
<style></style>
