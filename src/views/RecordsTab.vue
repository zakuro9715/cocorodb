<template>
  <ion-page>
    <ion-content>
      <HomeHeader />
      records
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue'
import { defineComponent } from 'vue'
import { Record } from '@/objects'
import HomeHeader from './components/HomeHeader.vue'

export default defineComponent({
  name: 'RecordsTab',
  components: {
    IonContent,
    IonPage,
    HomeHeader,
  },
  data: () => ({
    records: Array<Record>(),
  }),
})
</script>
