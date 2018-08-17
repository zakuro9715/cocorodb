<i18n>
ja:
  name: データ名
  isRange: 範囲データ
</i18n>
<template>
  <v-form v-model="valid">
    <v-flex>
      <v-text-field
        :label="$t('name')"
        v-model="name"
        :rules="nameRules"
        required />
    </v-flex>
    <v-flex>
      <v-btn-toggle v-model="kind">
        <v-btn value="default">Default</v-btn>
        <v-btn value="value">Value</v-btn>
        <v-btn value="duration">Duration</v-btn>
      </v-btn-toggle>
    </v-flex>
    <v-flex>
      <cocoro-range-slider
        v-show="kind === 'value'"
        v-model="range" />
    </v-flex>
    <v-flex>
      <v-btn
        :disabled="!valid"
        @click="submit">{{ $t('submit') }}</v-btn>
    </v-flex>
  </v-form>
</template>

<script>
export default {
  name: 'KindForm',
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
  },
  data: (vm) => ({
    kind: 'default',
    valid: false,
    nameRules: [(v) => !!v || 'Name is required'],
    objectId: vm.model.objectId || '',
    name: vm.model.name || '',
    range: vm.model.range,
  }),
  computed: {
    isRange() {
      return this.kind === 'default'
    },
  },
  methods: {
    submit() {
      this.$emit('submit', {
        objectId: this.objectId,
        name: this.name,
        kind: this.kind,
        range: this.isRange && this.range,
      })
    },
  },
}
</script>

<style>
</style>
