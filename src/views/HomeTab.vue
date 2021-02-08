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
import * as store from '@/db'
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
    items: Array<store.Item>(),
  }),
  async created() {
    await store.prepare()
    this.items = await store.items.getAll()
  },
})
</script>
