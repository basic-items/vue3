<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/user">User</router-link>
  </div>
  <router-view />
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
