<template>
  <v-app>
    <v-content>
      <app-header />
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from '~/components/app-header.vue'

export default {
  components: { AppHeader },
}
</script>
