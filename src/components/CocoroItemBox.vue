<template>
  <ion-card>
    <ion-card-content>
      {{ item.name }}
      <CocoroRecordForm
        :value-kind="item.valueKind"
        :record="record"
        @submit="saveRecord"
      />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent } from '@ionic/vue'
import { defineComponent, PropType } from 'vue'
import { records } from '@/db'
import { Item, Record } from '@/db'
import CocoroRecordForm from './CocoroRecordForm.vue'

export default defineComponent({
  name: 'CocoroItemBox',
  components: {
    IonCard,
    IonCardContent,
    CocoroRecordForm,
  },
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
  },
  data: (vm) => ({
    record: records.new(vm.item),
  }),
  methods: {
    async saveRecord(record: Record) {
      await records.put(record)
      this.record = records.new(this.item)
    },
  },
})
</script>
