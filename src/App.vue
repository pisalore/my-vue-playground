<script setup>
import CounterVue from "@/components/Counter.vue";
import TemplateVue from "@/components/Template.vue";
import DynamicComponentVue from "@/components/DynamicComponent.vue";
import TodoUtilityVue from "@/components/TodoUtility.vue";
import { ref } from "vue";

const msg = ref("messaggio");

function handleChangeMessage(char) {
  msg.value += char;
}
</script>

<template>
  <CounterVue />
  <TemplateVue />
  <DynamicComponentVue :msg="msg" @changeMessage="handleChangeMessage" />
  <TodoUtilityVue />
</template>
