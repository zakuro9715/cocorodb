<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-title size="large">
            Blank
          </ion-title>
          <ion-buttons slot="end">
            <ion-button @click="$router.push({ name: 'settings' })">
              <ion-icon icon="settings" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <CocoroMainBox />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/vue'
import { defineComponent } from 'vue'
import CocoroMainBox from '@/components/CocoroMainBox.vue'

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
    CocoroMainBox,
  },
})
</script>
