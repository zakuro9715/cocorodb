<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HomeHeader />
      <CocoroList v-if="items.length > 0">
        <CocoroRecordBox
          v-for="item in items"
          :key="item.id"
          :record="newRecord(item)"
          @submit="submitRecord"
        />
      </CocoroList>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { records, Record, Item, prepare as prepareDB } from '@/db'
import { CocoroList, CocoroRecordBox } from '@/components'
import HomeHeader from './components/HomeHeader.vue'


interface Data {
  records: { [key: number]: Record }
}

export default defineComponent({
  name: 'HomeTab',
  components: {
    IonPage,
    IonContent,
    HomeHeader,
    CocoroList,
    CocoroRecordBox,
  },
  data: (): Data => ({
    records: {},
  }),
  computed: {
    ...mapGetters('items', {
      items: 'list',
    }),
  },
  async created() {
    await prepareDB()
    await this.loadAllItems()
    this.initRecords()
  },
  methods: {
    ...mapActions({
      loadAllItems: 'items/loadAll',
      putRecord: 'records/put',
    }),
    initRecords() {
      this.records = Object.fromEntries(this.items.map((v: Item) => [v.id, records.new(v)]))
    },
    newRecord(item: Item) {
      return records.new(item)
    },
    async submitRecord(record: Record) {
      await this.putRecord(record)
      this.initRecords()
    },
  },
})
</script>
