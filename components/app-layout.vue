<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-toolbar-side-icon @click="sidemenu = !sidemenu"/>
        <h1 class="title">
          cocorodb
        </h1>
      </v-toolbar>

      <v-container>
        <slot />
      </v-container>

      <v-navigation-drawer
        v-model="sidemenu"
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
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    sidemenu: false,
  }),
}
</script>
