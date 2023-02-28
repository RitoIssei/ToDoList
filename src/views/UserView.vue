<template>
  <div class="user">
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(@/assets/background-home.jpg);
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
