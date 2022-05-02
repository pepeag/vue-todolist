<template>
  <div class="container mt-5">
    <notifications group="foo" />
    <add-task @addTask="addTask"></add-task>
    <transition-group
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutRight"
      class="row mt-3 justify-content-center"
    >
      <todo-item
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @completeTask="completeTask"
        @destoryTask="destoryTask"
        @editTodo="editTodo"
      >
      </todo-item>
    </transition-group>
  </div>
</template>

<script>
import AddTask from "./components/AddTask.vue";
import TodoItem from "./components/TodoItem.vue";
export default {
  name: "App",
  components: { AddTask, TodoItem },
  data: () => ({
    todos: [],
  }),
  methods: {
    addTask(todo) {
      this.todos.push(todo);
      this.$notify({
        group: "foo",
        title: "Created!",
        text: "Task has been created!",
      });
    },
    editTodo({ todo, index }) {
      this.todos[index] = todo;
    },
    destoryTask(index) {
      if (!confirm("are you delete?")) {
        return;
      }
      this.todos.splice(index);
      this.$notify({
        group: "foo",
        title: "Delete!",
        text: "Task has been deleted!",
        type: "error",
      });
    },
    completeTask(index) {
      this.todos[index].done = true;
      this.$notify({
        group: "foo",
        title: "Complete!",
        text: "Task has been Complete!",
      });
    },
  },
};
</script>

<style lang="scss">
</style>
