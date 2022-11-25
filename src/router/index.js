import { createRouter, createWebHashHistory } from "vue-router";
import TodoUtilityVue from "@/components/TodoUtility.vue";

export const routes = [{ path: "/todo-utility", component: TodoUtilityVue }];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
