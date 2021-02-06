<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HomeHeader />
      <CocoroItemList :items="items" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { defineComponent } from 'vue'
import * as db from '@/db'
import { Item } from '@/objects'
import CocoroItemList from '@/components/CocoroItemList.vue'
import HomeHeader from './components/HomeHeader.vue'

export default defineComponent({
  name: 'HomeTab',
  components: {
    IonPage,
    IonContent,
    HomeHeader,
    CocoroItemList,
  },
  data: () => ({
    items: Array<Item>(),
  }),
  async created() {
    await db.prepare()
    this.items = await db.items.getAll()
  },
})
</script>
