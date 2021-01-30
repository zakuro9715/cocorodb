<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-title size="large">
            設定
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        content
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Settings',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
})
</script>

<style scoped>
</style>
