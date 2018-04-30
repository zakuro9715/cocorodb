<template>
  <v-toolbar>
    <h1 class="title">
      cocorodb
    </h1>
    <v-spacer />
    <v-btn
      v-if="loggedIn"
      @click="logout">logout</v-btn>
  </v-toolbar>
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
