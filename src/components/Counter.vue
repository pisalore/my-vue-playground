<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../stores/main";

const store = useStore();

const { count, isEven, isPositive } = storeToRefs(store);

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
  <p>IsEven : {{ isEven }}</p>
  <p>IsPositive : {{ isPositive }}</p>
</template>
