<template>
  <ion-card>
    <ion-card-content>
      {{ item.name }}
      <CocoroRecordForm
        :record="record"
        @submit="saveRecord"
      />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent } from '@ionic/vue'
import { defineComponent, PropType } from 'vue'
import { items } from '@/db'
import { Item, Record } from '@/objects'
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
    record: items.newRecord(vm.item),
  }),
  methods: {
    saveRecord(record: Record) {
      alert(JSON.stringify(record))
    },
  },
})
</script>
