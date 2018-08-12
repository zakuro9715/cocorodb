<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex
        class="number-text"
        shrink>
        <v-text-field
          class="mt-0"
          v-model="internalValue[0]"
          hide-details
          single-line />
      </v-flex>
      <v-flex>
        <v-range-slider
          v-model="internalValue"
          :min="min"
          :max="max"
          :step="step" />
      </v-flex>
      <v-flex
        class="number-text"
        shrink>
        <v-text-field
          class="mt-0"
          v-model="internalValue[1]"
          hide-details
          single-line />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'CocoroRangeSlider',
  props: {
    value: {
      type: Array,
      default: () => [0, 100],
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
  },
  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(v) {
        if (this.value !== v) {
          this.$emit('input', v)
        }
      },
    },
  },
}
</script>

<style scoped>
.number-text {
  width: 60px;
}
</style>
