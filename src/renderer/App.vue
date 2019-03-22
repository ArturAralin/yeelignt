<template>
  <div id="app">
    <div class="logo">
      <img src="/static/logo.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'yeelight-gui',
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background:
    radial-gradient(
      ellipse at top left,
      rgba(255, 255, 255, 1) 40%,
      rgba(229, 229, 229, .9) 100%
    );
    font-family: 'Source Sans Pro', sans-serif;
  }

  .logo {
    text-align: center;
  }
</style>
