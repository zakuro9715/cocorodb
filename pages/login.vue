<template>
  <div>
    <h1>{{ $t('login') }}</h1>
    <v-btn @click="navigateToRegistration">{{ $t('register') }} </v-btn>
    <v-btn @click="loginAsAnonymous">{{ $t('anonymousLogin') }}</v-btn>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex'
export default {
  layout: 'auth',
  meta: {
    anonymous: true,
  },
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
