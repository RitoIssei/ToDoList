<template>
  <b-row>
    <b-col class="mt-5">
      <h1 class="text-center">TO DO LIST</h1>
      <b-card class="main shadow mt-5">
        <SignIn v-show="show" />
        <SignUp v-show="!show" />
        <div v-show="show" class="text-center mt-3">
          Don't have an account?
          <a @click.prevent="show = !show" href="">Register here</a>
        </div>
        <div v-show="!show" class="text-center mt-3">
          Do you already have an account?
          <a @click.prevent="show = !show" href="">Login here</a>
        </div>
      </b-card>
    </b-col>
  </b-row>
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
      show: true,
    };
  },
};
</script>
<style>
.main {
  flex-grow: 1;
  max-width: 600px;
  margin: auto;
}
/* .my-tab {
  height: 360px;
} */
</style>
