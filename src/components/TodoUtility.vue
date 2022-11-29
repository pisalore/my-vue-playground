<script setup>
import TodoListVue from "./TodoList.vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "../stores/todo";
import { ref, onMounted } from "vue";

const store = useTodoStore();

const { items, notCompleted, completed } = storeToRefs(store);
const formValid = ref(false);
const newItemText = ref("");

function handleSwitchTodo({ id, completed }) {
  store.switchTodo(id, completed);
}

function validateForm() {
  formValid.value = !!newItemText.value.trim();
}

function handleAddTodo(text) {
  store.addTodo(text);
}

onMounted(() => {
  store.getTodoItems();
});
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

  <div>
    <form @change="validateForm">
      <input type="text" v-model="newItemText" />
      <button
        @click="handleAddTodo(newItemText)"
        type="submit"
        :disabled="!formValid"
      >
        Submit
      </button>
    </form>
  </div>
</template>
