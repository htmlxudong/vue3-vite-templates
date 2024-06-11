import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
import 'virtual:uno.css'


const app = createApp(App);

app.use(router).use(pinia).mount("#app");
