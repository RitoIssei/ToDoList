<template>
  <div>
    <h1>TO DO LIST</h1>
    <div class="d-flex justify-content-between mt-4">
      <b-button @click="openModal({}, -1)" v-b-modal.modal-taskDetail
        >Add Task</b-button
      >
      <span
        >Hi, <a href="#">{{ this.$route.params.username }}</a>
      </span>
    </div>
    <search v-on:eventName="handleEvent" />
    <b-list-group class="mt-3" v-if="filteredTasks.length > 0">
      <b-list-group-item
        v-for="task in filteredTasks"
        :key="task.id"
        class="d-flex align-items-center justify-content-between"
        :class="{ selected: selectedItemIndex === task.id }"
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
          @click="openModal(task, task.id)"
          v-b-modal.modal-taskDetail
          :class="{
            'task-done': task.done,
          }"
          @mouseover="selectItem(task.id)"
          @mouseleave="unselectItem"
          class="task-detail flex-grow-1 text-truncate"
        >
          {{ task.title }}
        </div>
        <b-button
          style="margin-left: 10px"
          variant="danger"
          @click="deleteChoseTask(task.id)"
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
    ...mapState("TasksModule", {
      tasks: (state) => state.tasks,
    }),
    // tasks() {
    //   return this.$store.state.TasksModule.tasks;
    // },
    filteredTasks: function () {
      return this.tasks.filter((task) => {
        console.log(task.date);
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
  created() {
    console.log(123);
    this.fetchTasks();
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
    ...mapActions("TasksModule", ["deleteTask", "fetchTasks"]),

    selectItem(index) {
      this.selectedItemIndex = index;
    },
    unselectItem() {
      this.selectedItemIndex = null;
    },
    openModal(task, index) {
      this.selectedTask = Object.assign({}, task);
      this.selectedIndex = index;
      //this.$refs.modalTask.show();
    },
    deleteChoseTask(index) {
      console.log(index);
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
</style>
