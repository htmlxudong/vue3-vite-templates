import { createApp } from "vue";
import App from "./App.vue";
import antdPlugin from "@/plugins/antd-vue";

import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

import "virtual:uno.css";

import directives from "@/directives/index";

const app = createApp(App);

app.use(router).use(antdPlugin).use(pinia).use(directives).mount("#app");
