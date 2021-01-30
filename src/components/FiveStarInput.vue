<template>
  <ion-row class="ion-justify-content-around">
    <ion-icon
      v-for="i in 5"
      :key="i"
      icon="star"
      :size="size"
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
  props: {
    size: {
      type: String,
      default: () => '',
    },
  },
})
</script>
