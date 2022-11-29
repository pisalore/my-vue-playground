import { createApp } from "vue";
import { router } from "@/router";
import { pinia } from "./stores";
import App from "./App.vue";
import axios from "axios";

axios.defaults.baseURL = " http://127.0.0.1:3000";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
