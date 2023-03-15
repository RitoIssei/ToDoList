<template>
  <b-modal
    id="modal-taskDetail"
    title="Task detail"
    ok-title="Save"
    @ok="saveChanges"
  >
    <b-form-group label="Title:" class="mt-3">
      <b-form-input v-model="task.title"></b-form-input>
    </b-form-group>
    <b-form-group label="Description:" class="mt-3">
      <b-form-input v-model="task.description"></b-form-input>
    </b-form-group>
    <b-form-group label="Date:" class="mt-3">
      <date-picker v-model="task.date"></date-picker>
    </b-form-group>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "ModalTaskDetail",
  components: {
    DatePicker,
  },
  props: {
    task: Object,
    index: Number,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["updateTask", "addTask"]),
    saveChanges() {
      if (this.index >= 0) {
        const newTask = {
          userId: this.$route.params.username,
          title: this.task.title,
          description: this.task.description,
          date: this.task.date,
          done: false,
        };
        console.log(new Date());
        console.log(this.task.date);
        this.updateTask({ index: this.index, task: newTask });
      } else {
        if (this.newTitle === "") {
          this.newTitle = "Task title";
        }
        const newTask = {
          userId: this.$route.params.username,
          title: this.task.title,
          description: this.task.description,
          date: this.task.date,
          done: false,
        };
        this.addTask(newTask);
        //store.dispatch("addTask", newTask);
        this.newTitle = "";
        this.newDescription = "";
        this.newDate = "";
      }
    },
  },
};
</script>
