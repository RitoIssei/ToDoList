<template>
  <div class="user">
    <TodoList />
    <router-view />
  </div>
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
