<script setup>
import TodoItemVue from "./TodoItem.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["switchCompletedTodo"]);
</script>

<template>
  <h4>{{ props.title }}</h4>
  <ul>
    <ul>
      <li v-for="(item, index) in props.items" :key="item.id">
        {{ index + 1 }}.
        <TodoItemVue
          :text="item.text"
          :completed="item.completed"
          @change="
            emit('switchCompletedTodo', { id: item.id, completed: $event })
          "
        />
      </li>
    </ul>
  </ul>
</template>
