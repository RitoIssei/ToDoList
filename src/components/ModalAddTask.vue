<template>
  <div>
    <b-modal
      header-close-content="Close"
      id="modal-2"
      title="New task"
      ok-title="Save"
      @ok="saveChanges"
    >
      <form>
        <b-form-group label="Title:" class="mt-3">
          <b-form-input v-model="title"></b-form-input>
        </b-form-group>
        <b-form-group label="Description:" class="mt-3">
          <b-form-input v-model="description"></b-form-input>
        </b-form-group>
        <b-form-group label="Chose Date:" class="mt-3">
          <date-picker v-model="date"></date-picker>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "ModalAddTask",
  components: {
    DatePicker,
  },
  data() {
    return {
      title: "",
      description: "",
      date: new Date(),
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    saveChanges() {
      if (this.title === "") {
        this.title = "Task title";
      }
      const newTask = {
        userId: this.$route.params.id,
        title: this.title,
        description: this.description,
        date: this.date,
        done: false,
      };
      this.addTask(newTask);
      //store.dispatch("addTask", newTask);
      this.title = "";
      this.description = "";
      this.date = "";
      console.log(this.date);
    },
  },
};
</script>
