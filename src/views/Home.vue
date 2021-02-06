<template>
  <ion-page>
    <ion-content :fullscreen="true">
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

      <div id="container">
        <CocoroItemList :items="items" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/vue'
import { defineComponent } from 'vue'
import * as db from '@/db'
import { Item } from '@/objects'
import CocoroItemList from '@/components/CocoroItemList.vue'

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
    CocoroItemList,
  },
  data: () => ({
    items: Array<Item>(),
  }),
  computed: {
    title() {
      const d = new Date()
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDay()}日`
    },
  },
  async created() {
    await db.prepare()
    this.items = await db.items.getAll()
  },
})
</script>
