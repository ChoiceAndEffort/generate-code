import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";
import Example from "./views/Example";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/",
      name: "example",
      component: Example,
    },
  ],
});
