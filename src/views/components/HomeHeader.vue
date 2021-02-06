<template>
  <ion-header>
    <ion-toolbar>
      <ion-title size="large">
        {{ title }}
      </ion-title>
      <ion-buttons slot="end">
        <ion-button @click="$router.push({ name: 'settings' })">
          <ion-icon icon="settings" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import {
  IonHeader,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeHeader',
  components: {
    IonHeader,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
  },
  computed: {
    title() {
      const d = new Date()
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDay()}日`
    },
  },
})
</script>
