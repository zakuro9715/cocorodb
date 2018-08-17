<template>
  <v-toolbar>
    <v-toolbar-side-icon @click="toggleSidemenu"/>
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
    toggleSidemenu() {
      this.$emit('toggleSidemenu')
    },
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
  },
}
</script>
