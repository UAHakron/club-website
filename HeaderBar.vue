<template>
  <header>
    <div class="header-content">
      <nav class="nav-left">
        
        <a class="nav-item">Past</a>
        <a class="nav-item">Present</a>
        <a class="nav-item">Future</a>
      </nav>

      <nav class="nav-right">
        <a class="nav-item">Sign in</a>
        <a class="nav-item">Sign up</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;

  height: $header-height;

  background-color: #FFF;

  z-index: 9999;
}

.header-content {
  display: flex;
  align-items: start;
  justify-content: space-between;

  width: 100%;
/*
  max-width: $xl-bp;
  height: $header-height;

  // padding-top: 0.75rem;
  padding-left: calc( #{$sm-bp} * (1 / 24));
  padding-right: calc( #{$sm-bp} * (1 / 24));
*/
}

#logo {
  margin-right: 2em;
  display: inline-block;
  width: auto;
  height: 2em;
}

nav {
  display: flex;
  align-items: flex-end;
}

.nav-left {
  justify-self: flex-start;
}

.nav-item {
/*  color: $light-text-color;*/
  margin: 2em 1em 0;
  white-space: nowrap;
}
</style>
