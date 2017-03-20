<template>
  <main>
    <img src="/public/logo.png">
    <h3 class="view1-title">This is View1</h3>
    <a href="/">Main</a>
    <router-link to="/view1">여기는 SPA, View1</router-link>
    <router-link to="/view2">여기는 SPA, View2</router-link>
  </main>
</template>
<script>
  export default {
    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'view1 title',
          description: 'this is view1 description',
          keywords: 'view, view1'
        }
      }
    }
  }

</script>
