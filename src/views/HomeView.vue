<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <TestVue></TestVue>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TestVue from "@/components/TestVue.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    TestVue,
  },
})
export default class HomeView extends Vue {}
</script>
