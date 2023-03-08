<template>
  <b-card class="main shadow">
    <h1>TO DO LIST</h1>
    <div class="d-flex justify-content-between mt-4">
      <b-button class="" v-b-modal.modal-2>Add Task</b-button>
      <span>Hi, {{ this.$route.params.id }}</span>
    </div>
    <div>
      <div class="mt-3 d-flex justify-content-between">
        <div style="margin-right: 10px">
          <div>Task name</div>
          <b-form-input
            type="search"
            class="mt-2"
            v-model="searchTerm"
            style="height: 34px"
          ></b-form-input>
        </div>
        <div class="">
          <div>Date</div>
          <date-picker
            class="mt-2"
            v-model="dateChose"
            range
            style="width: 220px; margin-right: 10px"
          ></date-picker>
        </div>
      </div>
      <b-button variant="primary" style="width: 150px" class="mt-3"
        >Search</b-button
      >
      <b-button
        @click="todayChange"
        variant="dark"
        style="width: 150px; margin-left: 20px"
        class="mt-3"
        >Task To Day</b-button
      >
    </div>

    <b-list-group class="mt-3" v-if="filteredTasks.length > 0">
      <b-list-group-item
        v-for="(task, index) in filteredTasks"
        :key="index"
        class="d-flex align-items-center justify-content-between"
        :class="{ selected: selectedItemIndex === index }"
      >
        <div
          class="d-flex align-items-center"
          @click.stop="task.done = !task.done"
          style="height: 36px; width: 30px"
        >
          <input type="checkbox" v-model="task.done" class="task-checkbox" />
          <i
            class="mdi mdi-checkbox-blank-outline"
            :class="{
              checked: task.done,
            }"
          ></i
          ><i
            class="mdi mdi-checkbox-marked"
            :class="{
              unchecked: !task.done,
            }"
          ></i>
        </div>
        <div
          @click="openModal(task, index)"
          v-b-modal.modal-1
          :class="{
            'task-done': task.done,
          }"
          @mouseover="selectItem(index)"
          @mouseleave="unselectItem"
          class="task-detail flex-grow-1 text-truncate"
        >
          {{ task.title }}
        </div>
        <b-button
          style="margin-left: 10px"
          variant="danger"
          @click="deleteChoseTask(index)"
          ><i style="color: black" class="mdi mdi-delete"></i
        ></b-button>
      </b-list-group-item>
    </b-list-group>
    <b-card class="text-center mt-3" v-else
      >No tasks available for the selected time.</b-card
    >
    <ModalTaskDetail :task="selectedTask" :index="selectedIndex" />
    <ModalAddTask />
  </b-card>
</template>

<script>
import ModalTaskDetail from "@/components/ModalTaskDetail.vue";
import ModalAddTask from "@/components/ModalAddTask.vue";
import Search from "@/components/Search.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapState, mapActions } from "vuex";

export default {
  name: "TodoList",
  components: {
    ModalTaskDetail,
    ModalAddTask,
    Search,
    DatePicker,
  },
  computed: {
    ...mapState(["tasks"]),
    filteredTasks: function () {
      return this.tasks.filter((task) => {
        return task.date >= this.dateChose[0] && task.date <= this.dateChose[1];
      });
    },
  },
  data() {
    return {
      selectedTask: {},
      selectedIndex: -1,
      selectedItemIndex: -1,
      searchTerm: "",
      dateChose: [
        new Date(2023, 1, 28),
        new Date(new Date().getTime() + 86400000),
      ],
    };
  },
  methods: {
    search() {
      // Do search logic here
      console.log("Search term:", this.searchTerm);
    },
    ...mapActions(["deleteTask"]),
    todayChange() {
      this.dateChose = [new Date(), new Date(new Date().getTime() + 86400000)];
      console.log(this.dateChose);
    },
    selectItem(index) {
      this.selectedItemIndex = index;
    },
    unselectItem() {
      this.selectedItemIndex = null;
    },
    openModal(task, index) {
      this.selectedTask = task;
      this.selectedIndex = index;
      //this.$refs.myModal.show();
    },
    deleteChoseTask(index) {
      this.deleteTask(index);
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  width: 600px;
}
.task-done {
  text-decoration: line-through;
}
.task-checkbox {
  display: none;
}
.checked {
  display: none;
}
.unchecked {
  display: none;
}
h1 {
  text-align: center;
}
.b-list-group-item:hover {
  background-color: black;
  cursor: pointer;
}
.selected {
  background-color: #6c757d;
}
@media only screen and (max-width: 600px) {
  .task-detail {
    width: 240px;
  }
  .main {
    border: 0;
    width: unset;
    min-width: 360px;
  }
}
</style>
