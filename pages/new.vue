<i18n>
ja:
  title: 新規データセット
</i18n>

<template>
  <page-layout :title="$t('title')">
    <template slot="toolbar">
      <v-btn
        @click="submit"
        icon><v-icon>send</v-icon>
      </v-btn>
    </template>

    <kind-form @submit="submit" />
  </page-layout>
</template>

<script>
import KindForm from '~/components/kind-form.vue'
import PageLayout from '~/components/page-layout.vue'

export default {
  components: { KindForm, PageLayout },
  methods: {
    async submit(kind) {
      await this.$store.dispatch('records/createKind', kind)
      this.$router.push('/')
    },
  },
}
</script>

<style>
</style>
