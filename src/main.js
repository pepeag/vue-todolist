import Vue from "vue";
import App from "./App.vue";
import AddTask from "./components/AddTask.vue";
Vue.use(AddTask);
import TodoItem from "./components/TodoItem.vue";
Vue.use(TodoItem);
import Notifications from "vue-notification";
Vue.use(Notifications);
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.css";
import "animate.css";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
