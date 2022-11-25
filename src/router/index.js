import { createRouter, createWebHashHistory } from "vue-router";
import TodoUtilityVue from "@/components/TodoUtility.vue";
import CounterVue from "@/components/Counter.vue";
import HomePageVue from "@/components/HomePage.vue";
import NotFoundVue from "@/components/NotFound.vue";

export const routes = [
  { path: "/", component: HomePageVue, name: "home" },
  { path: "/todo-utility", component: TodoUtilityVue, name: "todos" },
  { path: "/counter", component: CounterVue, name: "counter" },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundVue },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
