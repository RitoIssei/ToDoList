<template>
  <div class="main">
    <h1>TO DO LIST</h1>
    <div class="d-flex justify-content-between mt-4">
      <b-button @click="openModal({}, -1)" v-b-modal.modal-taskDetail
        >Add Task</b-button
      >
      <span>Hi, {{ this.$route.params.username }}</span>
    </div>
    <search v-on:eventName="handleEvent" />
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
          style="padding-right: 10px"
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
          v-b-modal.modal-taskDetail
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
  </div>
</template>

<script>
import ModalTaskDetail from "@/components/ModalTaskDetail.vue";
import Search from "@/components/Search.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapState, mapActions } from "vuex";

export default {
  name: "TodoList",
  components: {
    ModalTaskDetail,
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
    handleEvent(dateChose) {
      // Xử lý dữ liệu từ component con
      this.dateChose = dateChose;
      console.log(dateChose);
    },
    search() {
      // Do search logic here
      console.log(this.searchTerm);
    },
    ...mapActions(["deleteTask"]),

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
}
</style>
