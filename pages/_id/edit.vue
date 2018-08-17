<i18n>
ja:
  title: データセット編集
</i18n>

<template>
  <div>
    <h1>{{ $t('title') }}</h1>
    <kind-form
      :model="kind"
      @submit="submit" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import KindForm from '~/components/kind-form.vue'

export default {
  components: { KindForm },
  computed: {
    ...mapState('records', ['kinds']),
    kind() {
      return this.kinds[this.$route.params.id]
    },
  },
  methods: {
    async submit(kind) {
      await this.$store.dispatch('records/updateKind', kind)
      this.$router.push('/')
    },
  },
}
</script>

<style>
</style>
