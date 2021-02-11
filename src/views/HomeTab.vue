<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HomeHeader />
      <CocoroList>
        <CocoroRecordBox
          v-for="i, record in records"
          :key="i"
          :record="record"
          @submit="submitRecord(i, event)"
        />
      </CocoroList>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { defineComponent, reactive, computed } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { records, prepare as prepareDB, RecordData } from '@/db'
import { Record, Item } from '@/models'
import { useGlobalStore } from '@/store'
import { CocoroList, CocoroRecordBox } from '@/components'
import HomeHeader from './components/HomeHeader.vue'


export default defineComponent({
  name: 'HomeTab',
  components: {
    IonPage,
    IonContent,
    HomeHeader,
    CocoroList,
    CocoroRecordBox,
  },
  async setup() {
    console.log('errrrrrr')
    const store = useGlobalStore()
    console.log(store)
    await prepareDB()
    await store.item.loadAll()
    const records = reactive(store.item.newEmptyRecords())
    const putRecord = store.record.put
    async function submitRecord(i: number, record: Record) {
      const saved = await putRecord(record)
      records[i] = saved.item.newRecordData()
    }

    return { records, list: computed(() => store.item.list) }
  },
})
</script>
