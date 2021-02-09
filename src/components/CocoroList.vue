<template>
  <ion-list style="background: var(--ion-background-color);">
    <slot />
  </ion-list>
</template>

<script lang="ts">
import { IonList } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CocoroList',
  components: {
    IonList,
  },
})
</script>
