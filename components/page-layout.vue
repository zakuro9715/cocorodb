<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-toolbar-side-icon @click="back"><v-icon>arrow_back</v-icon></v-toolbar-side-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer />
        <slot name="toolbar" />
      </v-toolbar>
      <v-container>
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>
