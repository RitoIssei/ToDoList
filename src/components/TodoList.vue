<template>
  <div class="main">
    <h1>List Task</h1>
    <form v-on:submit.prevent="addTask" class="input mt-3">
      <b-form-input
        v-model="title"
        type="text"
        placeholder="Enter a new task"
      />
      <b-form-input
        v-model="description"
        type="text"
        placeholder="Enter a description"
      />
      <b-form-input
        v-model="date"
        type="date"
        placeholder="Enter a description"
      />
      <b-button class="mt-3" type="submit">Add Task</b-button>
    </form>
    <div>
      <Search />
    </div>
    <div>
      <Calendar />
    </div>
    <b-list-group>
      <b-list-group-item
        v-for="(task, index) in tasks"
        :key="index"
        class="d-flex flex-row mt-3"
      >
        <div
          :class="{ 'task-done': task.done }"
          class="TaskDetail"
          v-b-modal.modal-1
          @click="openModal(task)"
        >
          {{ task.title }}
        </div>
        <div class="TaskDone">
          <b-form-checkbox v-model="task.done" />
        </div>
      </b-list-group-item>
    </b-list-group>
    <ModalTaskDetail :task="selectedTask" />
  </div>
</template>

<script>
import ModalTaskDetail from "@/components/ModalTaskDetail.vue";
import Search from "@/components/Search.vue";
import Calendar from "@/components/Calendar.vue";

export default {
  name: "TodoList",
  components: {
    ModalTaskDetail,
    Search,
    Calendar,
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  data() {
    return {
      title: "",
      description: "",
      date: Date(),
      selectedTask: {},
    };
  },
  methods: {
    openModal(task) {
      this.selectedTask = task;
      //this.$refs.myModal.show();
      console.log(task);
    },
    addTask() {
      const newTask = {
        userId: this.$route.params.id,
        title: this.title,
        description: this.description,
        date: this.date,
        done: false,
      };
      this.$store.dispatch("addTask", newTask);
      console.log(newTask);
      this.title = "";
      this.description = "";
      this.date = "";
      this.done = false;
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  display: flex;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% auto 0 auto;
  padding: 3% 5% 5% 5%;
  width: 900px;
  background-color: var(--bs-gray-dark);
  border-radius: 10px;
}
.task-done {
  text-decoration: line-through;
}
.TaskDone {
  border-left: 2px solid var(--bs-gray-dark);
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
}
.TaskDetail {
  flex-basis: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
h1 {
  color: var(--bs-gray-100);
}
</style>
