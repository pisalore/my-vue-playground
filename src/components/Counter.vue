<script setup>
import { ref, computed } from "vue";

const count = ref(0);

const isEven = computed(() => count.value % 2 === 0);
const isPositive = computed(() => count.value >= 0);

function increment(value) {
  count.value += value;
}

function multiply(value) {
  count.value *= value;
}

function pow(value) {
  count.value **= value;
}
</script>

<template>
  Count is: {{ count }}
  <br />
  <button @click="increment(1)">+1</button>
  <br />
  <button @click="increment(-1)">-1</button>
  <br />
  <button @click="multiply(2)">*2</button>
  <br />
  <button @click="multiply(0.5)">/2</button>
  <br />
  <button @click="pow(2)">^2</button>
  <br />
  IsEven : {{ isEven }} IsPositive : {{ isPositive }}
</template>
