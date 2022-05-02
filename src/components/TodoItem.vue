<template>
  <div class="col-11">
    <div class="card mb-2">
      <div class="row mt-2 mb-2">
        <div
          class="col-7 ms-2 mt-2"
          :class="{ 'task-complete': todo.done }"
          @dblclick="editToggle = !editToggle"
        >
          <input
            type="text"
            v-model="todo.task"
            class="form-control"
            v-if="editToggle"
            @keyup.enter="editTodo"
          />
          <span v-else>{{ todo.task }}</span>
        </div>
        <div class="col-4">
          <button
            class="btn btn-sm btn-success me-3"
            @click="completeTask(index)"
          >
            <i class="material-icons">check</i>
          </button>
          <button class="btn btn-sm btn-danger" @click="destoryTask(index)">
            <i class="material-icons">delete</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "index"],
  data: () => ({
    editToggle: false,
  }),
  methods: {
    completeTask(index) {
      this.$emit("completeTask", index);
    },
    destoryTask(index) {
      this.$emit("destoryTask", index);
    },
    editTodo() {
      this.$emit("editTodo", { todo: this.todo, index: this.index });
      this.editToggle = false;
    },
  },
};
</script>

<style></style>
