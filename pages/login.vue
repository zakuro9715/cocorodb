<template>
  <div>
    <h1>login</h1>
    <v-btn @click="navigateToRegistration">Register</v-btn>
    <v-btn @click="loginAsAnonymous">Anonymous Login</v-btn>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex'
export default {
  layout: 'auth',
  methods: {
    loginAsAnonymous() {
      this.$store.dispatch('auth/loginAsAnonymous').then(() => {
        this.$router.push('/')
      })
    },
    navigateToRegistration() {
      this.$router.push('/registration')
    }
  },
}
</script>

<style>
</style>
