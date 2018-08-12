<template>
  <v-form v-model="valid">
    <h1>New data kind</h1>
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
  data() {
    return {
      valid: false,
      isRange: false,
      name: '',
      nameRules: [(v) => !!v || 'Name is required'],
      range: [0, 110],
    }
  },
  methods: {
    async submit() {
      await this.$store.dispatch('records/createKind', {
        name: this.name,
        range: this.isRange && this.range,
      })
      this.$router.push('/')
    },
  },
}
</script>

<style>
</style>
