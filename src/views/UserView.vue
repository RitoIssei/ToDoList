<template>
  <div class="user mt-5">
    <TodoList />
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
<style>
.user {
  display: flex;
  flex-direction: column;
}
</style>
