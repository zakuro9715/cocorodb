<template>
  <div>
    <h1>New data kind</h1>
    <kind-form @submit="submit" />
  </div>
</template>

<script>
import KindForm from '~/components/kind-form.vue'

export default {
  components: { KindForm },
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
