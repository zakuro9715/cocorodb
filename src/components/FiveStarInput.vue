<template>
  <ion-row class="ion-justify-content-around">
    <ion-icon
      v-for="i in 5"
      :key="i"
      icon="star"
      :size="size"
      :style="starsStyles[i]"
      @click="clickStar(i)"
    />
  </ion-row>
</template>

<script lang="ts">
import { IonRow, IonIcon } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FiveStarInput',
  components: {
    IonRow,
    IonIcon,
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    size: {
      type: String,
      default: () => '',
    },
    value: {
      type: Number,
      default: () => 0,
    },
  },
  computed: {
    starsStyles(): any {
      return [0, 1, 2, 3, 4, 5]
        .map((i) => i <= this.value ? { color: 'red' } : { })
    },
  },
  methods: {
    clickStar(i: number) {
      this.$emit('input', i === this.value ? 0 : i)
    },
  },
})
</script>
