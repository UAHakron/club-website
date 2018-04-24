<template>
<footer>
  <div class="footer-container">

    <ul>
      <router-link to="/contact" tag="li">Contact</router-link>
      <a tag="li" href="https://github.com/UAHakron/club-website">Improve the Website?</a>
    </ul>
  </div>
</footer>
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
footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #3990e6;
  margin-bottom: 0;
}

.footer-container {
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

li, a {
  list-style-type: none;
  margin: 10px;
  padding: 0.5em;
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.2);

  text-decoration: none;
}

.logo {
  height: 100%;
  cursor: pointer;
}

.faq {
  cursor: help;
}
</style>
