<template>
  <div class="hello">
    <ul class="tabs">
      <li v-on:click="changeTabs('login')">Sign In</li>
      <li v-on:click="changeTabs('registed')">Sign Up</li>
    </ul>
    <div>
      <div v-if="tabSelected === 'registed'">
        <h1>Sign Up</h1>
        <form>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="user.email" />

          <label for="username">Nick name:</label>
          <input type="text" id="username" v-model="user.username" />

          <label for="password">Password:</label>
          <input type="password" id="password" v-model="user.password" />

          <label for="confirmPassword">Re enter password:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
          />

          <button v-on:click.prevent="register">Sign Up</button>
        </form>
      </div>
      <div v-if="tabSelected === 'login'">
        <h1>Sign In</h1>
        <form>
          <label for="loginUsername">Nick name:</label>
          <input type="text" id="loginUsername" v-model="loginUsername" />

          <label for="loginPassword">Password:</label>
          <input type="password" id="loginPassword" v-model="loginPassword" />

          <button v-on:click.prevent="login">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
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
    changeTabs(tab) {
      this.tabSelected = tab;
      console.log();
    },
    register() {
      // Xử lý đăng ký tài khoản ở đây

      // Kiểm tra mật khẩu nhập lại có khớp với mật khẩu hay không
      if (this.user.password !== this.confirmPassword) {
        alert("Password does not match!");
        return;
      } else {
        // Gửi yêu cầu đăng ký tài khoản đến server
        axios
          .post("/api/register", {
            user,
          })
          .then((response) => {
            // Đăng ký thành công
            console.log(response.data);
          })
          .catch((error) => {
            // Xử lý lỗi
            console.log(error);
          });
      }
    },
    login() {
      // Xử lý đăng nhập ở đây
      axios
        .post("/api/login", {
          user,
        })
        .then((response) => {
          // Xử lý phản hồi từ máy chủ khi đăng nhập thành công
          this.isLoggedIn = true;
          this.errorMessage = "";
        })
        .catch((error) => {
          // Xử lý lỗi khi đăng nhập thất bại
          this.errorMessage = error.response.data.message;
        });
    },
    logout() {
      axios
        .post("/api/logout")
        .then((response) => {
          // Xử lý phản hồi từ máy chủ khi đăng xuất thành công
          this.isLoggedIn = false;
          this.errorMessage = "";
        })
        .catch((error) => {
          // Xử lý lỗi khi đăng xuất thất bại
          this.errorMessage = error.response.data.message;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabs {
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin: 0 -2px;
}
.tabs li {
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid #000;
  margin: 0 2px;
}
</style>
