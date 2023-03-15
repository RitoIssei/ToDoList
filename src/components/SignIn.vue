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
          v-model="user.nickname"
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
          v-model="user.password"
        ></b-form-input>
        <div style="color: #dc3545" v-show="state1 === false">
          Please enter something
        </div>
      </b-form-group>
      <b-button
        variant="success"
        style="width: 100%"
        class="mt-3"
        @click.prevent="login"
        >Sign in</b-button
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        nickname: "",
        password: "",
      },
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
      console.log(this.tasks);
      const data = { user: this.user };
      this.$store.dispatch("UserModule/apiLogin", data).then((result) => {
        if (result.success) {
          this.$router.push({
            name: "User",
            params: { username: this.user.nickname },
          });
        } else {
          console.log(result.error);
        }
      });
    },
  },
};
</script>
<style></style>
