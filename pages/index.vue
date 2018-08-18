<template>
  <app-layout>
    <h1>Top Page</h1>
    <v-form>
      <v-text-field
        v-model="kind"
        label="kind" />
      <v-btn @click="submit">Add Kind</v-btn>
    </v-form>
    <v-btn @click="fetchAllKinds">Reset</v-btn>
    <div
      :key="kind"
      v-for="kind in kinds">{{ kind }}</div>
  </app-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppLayout from '~/components/app-layout.vue'

export default {
  components: { AppLayout },
  data() {
    return {
      kind: '',
    }
  },
  computed: {
    ...mapState('records', ['kinds']),
  },
  methods: {
    ...mapActions('records', ['fetchAllKinds', 'createKind']),
    submit() {
      console.log(this.kind)
      this.createKind(this.kind)
    },
  },
}
</script>
