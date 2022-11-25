import { createRouter, createWebHashHistory } from "vue-router";
import TodoUtilityVue from "@/components/TodoUtility.vue";
import CounterVue from "@/components/Counter.vue";

export const routes = [
  { path: "/todo-utility", component: TodoUtilityVue },
  { path: "/counter", component: CounterVue },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
