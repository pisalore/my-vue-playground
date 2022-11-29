<script setup>
import { ref } from "vue";

const description = ref("");
const username = ref("");
const password = ref("");
const descriptionValid = ref(false);
const formValid = ref(false);

function validateDescription() {
  descriptionValid.value = !!description.value.trim();
}
function validateForm() {
  formValid.value = !!(username.value.trim() && password.value.trim());
}
</script>

<template>
  <h2>Validators</h2>
  <div>
    <input
      type="text"
      placeholder="Description"
      v-model="description"
      @input="validateDescription"
    />
    <span v-if="!descriptionValid">Please insert a value</span>
  </div>

  <div>
    <form @change="validateForm">
      <input type="text" v-model="username" />
      <input type="password" v-model="password" />
      <button type="submit" :disabled="!formValid">Submit</button>
    </form>
  </div>
</template>
