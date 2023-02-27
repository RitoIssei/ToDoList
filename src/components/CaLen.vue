<template>
  <div class="home">
    <b-tabs class="home__content">
      <b-tab title="Sign in">
        <form>
          <b-form-group
            class="mt-2"
            label="Username:"
            label-for="loginUsername"
          >
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
            <b-button class="form-btn" @click="login">Sign in</b-button>
          </div>
        </form>
      </b-tab>

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
            <b-button class="form-btn" @click="register">Sign up</b-button>
          </div>
        </form>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CaLen",
  data() {
    return {
      user: {
        email: "",
        username: "",
        password: "",
      },
      isLoggedIn: false,
      tabSelected: "",
      confirmPassword: "",
      loginUsername: "",
      loginPassword: "",
      errorMessage: "",
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
<style>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(@/assets/background-home1.jpg);
}
.home__content {
  width: 60%;
  max-width: 500px;
  margin: 5% auto;
}
.form-btn {
  margin: 3%;
  right: 0;
}
label {
  color: #eec6c6;
}
</style>
