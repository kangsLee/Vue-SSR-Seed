<template>
  <main>
    <img src="/public/logo.png">
    <h2 class="main-title">Main View</h2>
    <a href="/">Main</a>
    <a href="/users/0">User0</a>
    <router-link to="/users/1">User1</router-link>
    <router-link to="/view1">여기는 SPA, View1</router-link>
    <router-link to="/view2">여기는 SPA, View2</router-link>
  </main>

</template>

<script>
  export default {
    methods: {
    }
  }

</script>

<style lang="scss" scoped>
  main {
    text-align: center;
  }
</style>
