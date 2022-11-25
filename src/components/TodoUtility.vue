<script setup>
import { onMounted, ref, computed } from "vue";
import TodoListVue from "./TodoList.vue";

const items = ref([]);
const notCompleted = computed(() =>
  items.value.filter((item) => !item.completed)
);
const completed = computed(() => items.value.filter((item) => item.completed));

onMounted(() => {
  console.log("the component is now mounted.");
  items.value = [
    { id: 1, text: "text1", completed: true },
    { id: 2, text: "text2", completed: false },
    { id: 3, text: "text3", completed: true },
    { id: 4, text: "text4", completed: false },
    { id: 5, text: "text5", completed: true },
  ];
});

function handleSwitchTodo({ id, completed }) {
  const item = items.value.find((item) => item.id === id);
  item.completed = completed;
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
