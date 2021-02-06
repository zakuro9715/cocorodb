<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          tab="records"
          href="/records"
        >
          <ion-label>履歴</ion-label>
        </ion-tab-button>
        <ion-tab-button
          tab="home"
          href="/"
        >
          <ion-label>ホーム</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonPage,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
  },
})
</script>
