<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: "Hello World",
  },
});

const emit = defineEmits(["changeMessage"]);
</script>

<template>
  <h1>Props</h1>

  {{ props.msg }}
  <button @click="emit('changeMessage', '.')">Change Me</button>
</template>
