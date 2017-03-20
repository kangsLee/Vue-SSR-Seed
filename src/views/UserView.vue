<template>
  <div>
    <template v-if="user">
      <h1>User : {{ user.id }}</h1>
      <ul>
        {{user.name}}
      </ul>
    </template>
  </div>
</template>

<script>

function fetchUser (store) {
  return store.dispatch('FETCH_USER', {
    id: store.state.route.params.id
  })
}

export default {
  name: 'user-view',
  computed: {
    user () { // user 정보 가져오기 users/0
      return this.$store.state.users[this.$route.params.id]
    }
  },
  preFetch: fetchUser,
  beforeMount () {  // 마운트 되기전에 유저 정보를 Fetch
    fetchUser(this.$store)
  }
}
</script>
