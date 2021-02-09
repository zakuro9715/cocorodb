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
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('items', {
      items: 'list',
    }),
  },
  async created() {
    await store.prepare()
    await this.loadAllItems()
  },
  methods: {
    ...mapActions('items', {
      loadAllItems: 'loadAll',
    }),
  },
})
</script>
