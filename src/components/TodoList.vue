<template>
  <div>
    <h1>List Task</h1>
    <form v-on:submit.prevent="addTask">
      <b-form-input
        v-model="dataTask.title"
        type="text"
        placeholder="Enter a new task"
      />
      <b-form-input
        v-model="dataTask.description"
        type="text"
        placeholder="Enter a description"
      />
      <b-form-input
        v-model="dataTask.date"
        type="date"
        placeholder="Enter a description"
      />
      <b-button type="submit">Add Task</b-button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.done" />
        <span :class="{ 'task-done': task.done }">{{ task.title }}</span>
        <button @click="updateTask(index)">Edit</button>
        <input v-model="fixTask" type="text" placeholder="Enter a new task" />
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      tasks: [],
      dataTask: {
        userId: this.$route.params.id,
        title: "",
        description: "",
        date: Date(),
        done: false,
      },
      editingTaskIndex: null,
      fixTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.dataTask.title.trim()) {
        this.tasks.push(this.dataTask);
        this.newTask = "";
        console.log(this.dataTask.date);
      }
    },
    updateTask(index) {
      this.editingTaskIndex = index;
      if (this.fixTask.trim() && this.editingTaskIndex !== null) {
        console.log(this.fixTask.trim());
        this.tasks[this.editingTaskIndex].title = this.fixTask;
        this.fixTask = "";
        this.editingTaskIndex = null;
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
  watch: {
    newTask() {
      if (this.editingTaskIndex !== null) {
        this.updateTask();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.task-done {
  text-decoration: line-through;
}
</style>
