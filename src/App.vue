<template>
  <div class="main-content" id="app">
    <h1>서버사이드 렌더 테스트</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size:25px;
  }
</style>
