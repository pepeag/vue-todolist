<template>
  <div class="row justify-content-center">
    <div class="col-11">
      <h2 class="text-center">Todo List</h2>
      <label for="">New Task</label>
      <input type="text" class="form-control" v-model="task"/>
      <button class="btn btn-sm btn-primary mt-3" @click="addTask">
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data: () => ({
    task: ""
  }),
  methods: {
    addTask() {
      if (this.task == "") {
        return alert("Task is required");
      }
      this.$emit("addTask", { task: this.task, done: false });
      this.task = "";
    },
  },
};
</script>

<style>
</style>