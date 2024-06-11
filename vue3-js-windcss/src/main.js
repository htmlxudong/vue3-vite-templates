import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/reset.scss";
import router from "./router";
import antdPlugin from "@/plugins/antd-vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
// custom directives
import directives from "@/directives/index";

const app = createApp(App);

app.use(router).use(antdPlugin).use(pinia).use(directives).mount("#app");
