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
      <b-form-input v-model="task.descrip"></b-form-input>
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
    ...mapActions("TasksModule", ["updateTask", "addTask"]),
    saveChanges() {
      if (this.index >= 0) {
        const newTask = {
          id: this.task.id,
          title: this.task.title,
          descrip: this.task.descrip,
          date: this.task.date,
          done: false,
        };
        console.log(new Date());
        console.log(this.task.date);
        this.updateTask(newTask);
      } else {
        if (this.newTitle === "") {
          this.newTitle = "Task title";
        }
        console.log(this.task.date);
        const newTask = {
          title: this.task.title,
          descrip: this.task.descrip,
          deadline: this.task.date,
        };
        this.addTask(newTask);
        //store.dispatch("addTask", newTask);
        this.newTitle = "";
        this.descrip = "";
        this.newDate = "";
      }
    },
  },
};
</script>
