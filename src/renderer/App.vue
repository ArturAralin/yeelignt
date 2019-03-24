<template>
  <div id="app">
  <el-container>
    <el-header
      height="auto"
    >
      <div class="logo">
        <img src="/static/logo.png">
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  </div>
</template>

<script>
  export default {
    name: 'yeelight-gui',
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
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
