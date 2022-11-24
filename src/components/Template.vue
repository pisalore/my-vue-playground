<script setup>
import { ref, computed } from "vue";

const rawHtml = `<span style="color:red";>Ciao</span>`;
const isButtonDisabled = ref(true);

const objectOfAttrs = ref({
  id: "container",
  class: "wrapper",
});
const ok = ref(true);
const message = ref("prova ciao");

const inverted = computed(() => message.value.split("").reverse().join(""));

const isActive = ref(true);
const isActiveTest = ref(true);
const awesome = ref(false);
const items = [{ message: "Foo" }, { message: "Bar" }];
</script>

<template>
  {{ rawHtml }}
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectOfAttrs">ciao</div>
  <p>
    {{ ok ? "YES" : "NO" }}
  </p>
  <p>
    {{ message.split("").reverse().join("") }}
  </p>
  <p>
    {{ inverted }}
  </p>
  <div :class="{ active: isActive, test: isActiveTest }">Binding class</div>
  Conditional rendering

  <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <li v-for="item in items" :key="item">
    {{ item.message }}
  </li>
</template>
