<template>
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
          :value="dateChose"
          @input="changeDate"
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
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "Search",
  components: {
    DatePicker,
  },
  data() {
    return {
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
    todayChange() {
      this.dateChose = [new Date(), new Date(new Date().getTime() + 86400000)];
      console.log(this.dateChose);
      this.$emit("eventName", this.dateChose);
    },
    changeDate(event) {
      this.dateChose = event;
      this.$emit("eventName", this.dateChose);
    },
  },
};
</script>
<style scoped>
.search-icon-container {
  margin-right: 10px;
}
</style>
