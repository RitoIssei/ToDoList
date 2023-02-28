<template>
  <div>
    <b-modal id="modal-1" title="Task detail" ok-title="Save" @ok="saveChanges">
      <b-list-group>
        <b-list-group-item class="d-flex flex-row">
          <b-input-group prepend="Title" class="mt-3">
            <b-form-input
              :value="this.task.title"
              ref="editTitle"
            ></b-form-input>
          </b-input-group>
        </b-list-group-item>
        <b-list-group-item>
          <b-input-group prepend="Description" class="mt-3">
            <b-form-input
              :value="this.task.description"
              ref="editDescription"
            ></b-form-input>
          </b-input-group>
        </b-list-group-item>
      </b-list-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalTaskDetail",
  props: {
    task: {
      type: Object,
    },
  },

  data() {
    return {};
  },
  methods: {
    saveChanges() {
      console.log(task);
    },
  },
  //   created() {
  //     editTitle = this.task.title;
  //     editDescription = this.task.description;
  //     console.log(editTitle);
  //   },
};
</script>
