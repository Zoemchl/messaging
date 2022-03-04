import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router/index.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const base = axios.create({
  baseURL: "http://localhost:4000"
});

// Vue.prototype.$http = base;
// Vue.config.productionTip = false;
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");
const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')