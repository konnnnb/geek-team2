<template>
  <div id="app">

    <NavBar/>

    <router-view id="main"/>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar.vue"


export default {
  components: {
    NavBar,
  },
}
</script>

<style>
#app {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#main {
  padding-top: 50px;

}
</style>
