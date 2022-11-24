<script setup>
import { onMounted, ref, computed } from "vue";

const items = ref([]);

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

const notCompleted = computed(() =>
  items.value.filter((item) => !item.completed)
);
const completed = computed(() => items.value.filter((item) => item.completed));
</script>

<template>
  <h1>Not compelted</h1>
  <ul>
    <li v-for="item in notCompleted" :key="item.id">
      {{ item.text }}
      <input type="checkbox" v-model="item.completed" />
    </li>
  </ul>

  <h1>Completed</h1>

  <ul>
    <li
      v-for="item in completed"
      :key="item.id"
      :class="{ 'item-compelted': item.completed }"
    >
      {{ item.text }}
      <input type="checkbox" v-model="item.completed" />
    </li>
  </ul>
</template>

<style scoped>
.item-compelted {
  text-decoration: line-through;
}
</style>
