import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // Importiere den Router

createApp(App)
  .use(router) // Stelle sicher, dass der Router verwendet wird
  .mount("#app");
