<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/test">Test</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  color: #2c3e50;
  font-family:
    'Overpass',
    'Noto Sans SC',
    -apple-system,
    BlinkMacSystemFont,
    'Helvetica Neue',
    Helvetica,
    Segoe UI,
    Arial,
    Roboto,
    'PingFang SC',
    'Hiragino Sans GB',
    'Microsoft Yahei',
    sans-serif;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
