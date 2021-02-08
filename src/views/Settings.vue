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
        <ion-button @click="clearDB">
          データ削除
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'
import { defineComponent } from 'vue'
import * as store from '@/store'

export default defineComponent({
  name: 'Settings',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  methods: {
    async clearDB(): Promise<void> {
      // eslint-disable-next-line no-alert
      if (confirm('全データ削除を実行しますか')) {
        await store.clear()
      }
    },
  },
})
</script>
