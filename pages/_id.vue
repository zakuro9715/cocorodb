<template>
  <nuxt-child />
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('records/fetchKind', params.id)
  },
}
</script>
