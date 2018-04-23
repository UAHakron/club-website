<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>


<template>
  <div id="app">
    <Header/>
    <img width="25%" src="./assets/hakron_logo.png" class="pic">
    <router-view></router-view>
  
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};

import Footer from "./components/Footer.vue";
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.pic {
  display: block;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
