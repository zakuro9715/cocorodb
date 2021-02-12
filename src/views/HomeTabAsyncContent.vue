<template>
  <CocoroList>
    <CocoroRecordBox
      v-for="record, i in records"
      :key="i"
      :record="record"
      @submit="submitRecord(i, event)"
    />
  </CocoroList>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from 'vue'
import { records, prepare as prepareDB, RecordData } from '@/db'
import { Record, Item } from '@/models'
import { useGlobalStore } from '@/store'
import { CocoroList, CocoroRecordBox } from '@/components'


export default defineComponent({
  name: 'HomeTabAsyncContent',
  components: {
    CocoroList,
    CocoroRecordBox,
  },
  async setup() {
    const store = useGlobalStore()
    await prepareDB()
    await store.item.loadAll()
    const records = ref(store.item.list.value.map((v) => v.newRecord()))
    const putRecord = store.record.put
    async function submitRecord(i: number, record: Record) {
      const saved = await putRecord(record)
      records.value[i] = saved.item.newRecord()
    }

    return {
      records,
      list: store.item.list,
      submitRecord,
    }
  },
})
</script>
