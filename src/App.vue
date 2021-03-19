<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">showposts</router-link> |
      <router-link to="/showpost">showpost</router-link>|
      <router-link to="/post" v-if="isLoggedIn">post</router-link>|
      <router-link to="/mypage">mypage</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.uid !== null
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
