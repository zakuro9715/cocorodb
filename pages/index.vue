<template>
  <div>
    <h1 class="title">
      cocorodb
    </h1>
    <nuxt-link
      to="login"
      v-if="!loggedIn">login</nuxt-link>
    <v-btn
      v-if="loggedIn"
      @click="logout">logout</v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ loggedIn: 'auth/loggedIn' }),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>

<style>
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
</style>
