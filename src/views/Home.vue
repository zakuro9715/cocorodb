<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-title size="large">
            Blank
          </ion-title>
          <ion-buttons slot="end">
            <ion-button>
              <ion-icon icon="settings" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        content
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
  },
})
</script>

<style scoped>
</style>
