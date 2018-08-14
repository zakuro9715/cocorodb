<template>
  <v-form v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      required />
    <v-checkbox
      label="is range data"
      v-model="isRange" />
    <cocoro-range-slider
      v-show="isRange"
      v-model="range" />

    <v-btn
      :disabled="!valid"
      @click="submit">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'KindForm',
  props: {
    kind: {
      type: Object,
      default: null,
    },
  },
  data: (vm) => ({
    valid: false,
    isRange: (vm.kind && !!vm.kind.range) || false,
    nameRules: [(v) => !!v || 'Name is required'],
    name: (vm.kind && vm.kind.name) || '',
    range: (vm.kind && vm.kind.range) || [0, 100],
  }),
  methods: {
    submit() {
      this.$emit('submit', {
        name: this.name,
        range: this.isRange && this.range,
      })
    },
  },
}
</script>

<style>
</style>
