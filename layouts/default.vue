<template>
  <v-app>
    <v-content>
      <app-header @toggleSidemenu="sidemenu =! sidemenu" />
      <v-container>
        <nuxt/>
      </v-container>
      <app-sidemenu v-model="sidemenu" />
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from '~/components/app-header.vue'
import AppSidemenu from '~/components/app-sidemenu.vue'

export default {
  components: { AppHeader, AppSidemenu },
  middleware: 'loggedIn',
  data: () => ({
    sidemenu: false,
  }),
}
</script>
