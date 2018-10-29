<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
// Use this code if you want to use a bulmaswatch theme or customized bulma
// Bulma + Bulmaswatch
@import 'node_modules/bulmaswatch/minty/variables';
@import 'node_modules/bulma/sass/utilities/_all';
// Any customized variables here
// See https://buefy.github.io/documentation/customization for details
@import 'node_modules/bulma/bulma';
@import 'node_modules/bulmaswatch/minty/overrides';

// Buefy
@import 'node_modules/buefy/src/scss/buefy';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
