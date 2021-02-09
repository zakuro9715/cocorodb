<template>
  <ion-card>
    <ion-card-content>
      {{ item.name }}
      <RecordForm
        :value-kind="item.valueKind"
        :record="record"
        @submit="submitRecord"
      />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent } from '@ionic/vue'
import { defineComponent, PropType } from 'vue'
import { mapActions } from 'vuex'
import { records } from '@/db'
import { Item, Record } from '@/db'
import RecordForm from '@/forms/RecordForm.vue'

export default defineComponent({
  name: 'CocoroItemBox',
  components: {
    IonCard,
    IonCardContent,
    RecordForm,
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
    ...mapActions('records', {
      putRecord: 'put',
    }),
    async submitRecord(record: Record) {
      this.putRecord(record)
      this.record = records.new(this.item)
    },
  },
})
</script>
