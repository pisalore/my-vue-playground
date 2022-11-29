import { createRouter, createWebHashHistory } from "vue-router";
import TodoUtilityVue from "@/components/TodoUtility.vue";
import CounterVue from "@/components/Counter.vue";
import HomePageVue from "@/components/HomePage.vue";
import InputsVue from "@/components/Inputs.vue";
import WatcherVue from "@/components/Watcher.vue";
import ValidatorsVue from "@/components/Validators.vue";
import AxiosVue from "@/components/Axios.vue";
import NotFoundVue from "@/components/NotFound.vue";

export const routes = [
  { path: "/", component: HomePageVue, name: "home" },
  { path: "/todo-utility", component: TodoUtilityVue, name: "todos" },
  { path: "/counter", component: CounterVue, name: "counter" },
  { path: "/inputs", component: InputsVue, name: "inputs" },
  { path: "/watcher", component: WatcherVue, name: "watcher" },
  { path: "/validators", component: ValidatorsVue, name: "validators" },
  { path: "/axios", component: AxiosVue, name: "axios" },
  { path: "/:pathMatch(.*)*", component: NotFoundVue, name: "NotFound" },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
