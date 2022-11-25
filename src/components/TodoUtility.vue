<script setup>
import TodoListVue from "./TodoList.vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "../stores/todo";

const store = useTodoStore();

const { items, notCompleted, completed } = storeToRefs(store);

function handleSwitchTodo({ id, completed }) {
  store.switchTodo(id, completed);
}
</script>

<template>
  <h1>Todo Utility</h1>
  <TodoListVue
    title="Todo"
    :items="notCompleted"
    @switch-completed-todo="handleSwitchTodo"
  />

  <TodoListVue
    title="Completed"
    :items="completed"
    @switch-completed-todo="handleSwitchTodo($event)"
  />
</template>
