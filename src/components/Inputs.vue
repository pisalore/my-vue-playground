<script setup>
import { ref } from "vue";
const message = ref("");

const trueValue = "yes";
const falseValue = "no";
const checked = ref(trueValue);

const checkedNames = ref([]);
const names = [
  { id: "john", value: "John" },
  { id: "jake", value: "Jake" },
  { id: "mike", value: "Mike" },
];
const picked = ref("");
const selected = ref([]);
</script>

<template>
  <h2>Inputs</h2>
  <div>
    <p>Message is: &quot;{{ message }}&quot;</p>
    <input v-model="message" placeholder="edit me" />
  </div>
  <div>
    <input
      type="checkbox"
      id="checkbox"
      v-model="checked"
      false-value="bar"
      true-value="foo"
    />
    <label for="checkbox">{{ checked }}</label>
  </div>
  <div>
    <div>Checked names: {{ checkedNames }}</div>
    <span v-for="name in names" :key="name.id">
      <input
        type="checkbox"
        :id="name.id"
        :value="name.value"
        v-model="checkedNames"
      />
      <label :for="name.id">{{ name.value }}</label>
    </span>
  </div>
  <div>
    <div>Picked: {{ picked }}</div>
    <span v-for="name in names" :key="name.id">
      <input type="radio" :id="name.id" :value="name.id" v-model="picked" />
      <label :for="name.id">{{ name.value }}</label>
    </span>
  </div>
  <div>Selected: {{ selected }}</div>
  <select v-model="selected" multiple>
    <option disabled value="">Please select one</option>
    <option v-for="name in names" :key="name.id" :value="name.id">
      {{ name.value }}
    </option>
  </select>
</template>
