<script setup>
import NavLinksVue from "./components/NavLinks.vue";
import TodoUtilityVue from "@/components/TodoUtility.vue";
import { ref } from "vue";
</script>

<template>
  <NavLinksVue />
  <router-view></router-view>
</template>
