<template>
<header>
  <div class="header-container">
    <router-link to="/"><img id="logo" src="../assets/hakron_logo_smaller.png" alt="logo"></router-link>

    <ul>
      <router-link to="/faq" tag="li" class="faq">FAQ</router-link>
      <router-link to="/about" tag="li">About&nbsp;us</router-link>
      <router-link to="/schedule" tag="li">Schedule</router-link>
      <router-link to="/contact" tag="li">Contact</router-link>
    </ul>
  </div>
</header>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
header {
  display: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #3990e6;
}

.header-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

ul {
  display: flex;
  align-items: center;
}

li {
  list-style-type: none;
  margin: 10px;
  padding: 0.5em;
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.2);
}

#logo {
  padding: 5%;
  margin-left: 5%;
  display: inline-block;
  width: auto;
  height: 100%;
}

.faq {
  cursor: help;
}
</style>
