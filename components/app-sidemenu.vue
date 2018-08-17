<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    tempolary>
    <v-list>
      <v-list-tile-content>
        <v-list-tile-title>
          Menu
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    drawer: {
      get() {
        return this.value
      },
      set(v) {
        if (this.value != v) {
          this.$emit('input', v)
        }
      },
    },
  },
}
</script>
