<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HomeHeader />
      <Suspense>
        <template #default>
          <HomeTabAsyncContent />
        </template>
        <template #fallback>
          <div>loading</div>
        </template>
      </Suspense>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { defineComponent } from 'vue'
import HomeTabAsyncContent from './HomeTabAsyncContent.vue'
import HomeHeader from './components/HomeHeader.vue'


export default defineComponent({
  name: 'HomeTab',
  components: {
    IonPage,
    IonContent,
    HomeHeader,
    HomeTabAsyncContent,
  },
})
</script>
