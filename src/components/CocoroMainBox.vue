<template>
  <ion-card>
    <ion-card-content>
      <ion-input
        placeholder="一言メモ"
        class="ion-margin-bottom ion-text-center"
        style="--background: var(--ion-background-color)"
      />
        <ion-row class="ion-justify-content-center">
        <ion-button shape="round">
          <ion-icon slot="icon-only" icon="checkmark" />
        </ion-button>
      </ion-row>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CocoroMainBox',
  components: {
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
  },
})
</script>

<style scoped>
</style>
