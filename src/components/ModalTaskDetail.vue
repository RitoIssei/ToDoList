<template>
  <div>
    <b-modal id="modal-1" title="Task detail" ok-title="Save" @ok="saveChanges">
      <b-form-group label="Title:" class="mt-3">
        <b-form-input :value="task.title" @input="editTitle"></b-form-input>
      </b-form-group>
      <b-form-group label="Description:" class="mt-3">
        <b-form-input
          :value="task.description"
          @input="editDescription"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Date:" class="mt-3">
        <date-picker :value="task.date" @input="editDate"></date-picker>
      </b-form-group>
    </b-modal>
  </div>
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
    return {
      newTitle: "",
      newDescription: "",
      newDate: new Date(),
    };
  },
  methods: {
    ...mapActions(["updateTask"]),
    editTitle(event) {
      this.newTitle = event;
      console.log(event);
    },
    editDescription(event) {
      this.newDescription = event;
      console.log(event);
    },
    editDate(event) {
      this.newDate = event;
      console.log(event);
    },
    saveChanges() {
      if (this.newDescription === "") {
        this.newDescription = this.task.description;
      }
      if (this.newTitle === "") {
        this.newTitle = this.task.title;
      }
      const newTask = {
        userId: this.$route.params.id,
        title: this.newTitle,
        description: this.newDescription,
        date: this.newDate,
        done: false,
      };
      console.log(new Date());
      console.log(this.task.date);
      this.updateTask({ index: this.index, task: newTask });
    },
  },
};
</script>
