<template>
  <b-container class="my-5 pt-sm-5">
    <b-card style="max-width: 600px; margin: auto">
      <TodoList />
    </b-card>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "UserView",
  components: {
    TodoList,
  },
};
</script>
<style></style>
