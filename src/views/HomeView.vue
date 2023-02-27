<template>
  <div class="home">
    <b-tabs class="home__content">
      <SignIn />
      <SignUp />
    </b-tabs>
  </div>
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

label {
  color: #eec6c6;
}
</style>
