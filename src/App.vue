<script setup>
import TodoUtilityVue from "@/components/TodoUtility.vue";
import { ref } from "vue";
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/todo-utility">Todo Utility</router-link>
      </li>
      <li>
        <router-link to="/counter">Counter</router-link>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>
