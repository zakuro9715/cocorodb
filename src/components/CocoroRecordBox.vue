<template>
  <ion-card>
    <ion-card-content>
      {{ record.item.name }}
      <RecordForm
        :record="record"
        @submit="submit"
      />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent } from '@ionic/vue'
import { defineComponent, PropType } from 'vue'
import { Record } from '@/models'
import { RecordForm } from '@/forms'

export default defineComponent({
  name: 'CocoroRecordBox',
  components: {
    IonCard,
    IonCardContent,
    RecordForm,
  },
  props: {
    record: {
      type: Object as PropType<Record>,
      required: true,
    },
  },
  emits: ['submit'],
  methods: {
    submit(record: Record) {
      this.$emit('submit', record)
    },
  },
})
</script>
