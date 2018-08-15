<i18n>
ja:
  name: データ名
  isRange: 範囲データ
</i18n>
<template>
  <v-form v-model="valid">
    <v-text-field
      :label="$t('name')"
      v-model="name"
      :rules="nameRules"
      required />
    <v-checkbox
      :label="$t('isRange')"
      v-model="isRange" />
    <cocoro-range-slider
      v-show="isRange"
      v-model="range" />

    <v-btn
      :disabled="!valid"
      @click="submit">{{ $t('submit') }}</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'KindForm',
  props: {
    kind: {
      type: Object,
      default: () => {},
    },
  },
  data: (vm) => ({
    valid: false,
    isRange: (vm.kind && !!vm.kind.range) || false,
    nameRules: [(v) => !!v || 'Name is required'],
    objectId: vm.kind.objectId || '',
    name: vm.kind.name || '',
    range: vm.kind.range || [0, 100],
  }),
  methods: {
    submit() {
      this.$emit('submit', {
        objectId: this.objectId,
        name: this.name,
        range: this.isRange && this.range,
      })
    },
  },
}
</script>

<style>
</style>
