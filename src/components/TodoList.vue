<template>
  <div>
    <h1>List Task Today</h1>
    <form v-on:submit.prevent="addTask">
      <input
        v-model="dataTask.description"
        type="text"
        placeholder="Enter a description"
      />
      <input
        v-model="dataTask.title"
        type="text"
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
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
        title: "",
        description: "",
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
