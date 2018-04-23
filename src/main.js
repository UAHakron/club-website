// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

import HelloWorld from "./components/HelloWorld";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/faq", component: FAQ },
    { path: "/about", component: About },
    { path: "/schedule", component: Schedule },
    { path: "/contact", component: Contact }
  ]
});

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
