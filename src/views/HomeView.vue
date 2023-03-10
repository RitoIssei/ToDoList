<template>
  <b-container class="my-5 pt-sm-5">
    <b-row class="justify-content-center">
      <b-col class="col-md-8 col-lg-6 col-xl-5">
        <div class="bg-header py-4">
          <div class="title text-center">TO DO LIST</div>
        </div>
        <b-card class="main">
          <SignIn v-show="showLogin" />
          <SignUp v-show="!showLogin" />
        </b-card>
        <div class="mt-5">
          <p v-show="showLogin" class="text-center">
            Don't have an account?
            <a @click.prevent="showLogin = !showLogin" href="">Register here</a>
          </p>
          <p v-show="!showLogin" class="text-center">
            Do you already have an account?
            <a @click.prevent="showLogin = !showLogin" href="">Login here</a>
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";

export default {
  name: "HomeView",
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      showLogin: true,
    };
  },
};
</script>
<style scoped>
.main {
  border: none;
}
.title {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  padding-left: 10px;
}
</style>
