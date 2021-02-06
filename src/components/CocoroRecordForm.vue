<template>
  <ion-row>
    <ion-input
      v-model="innerRecord.text"
      placeholder="一言メモ"
      class="ion-text-center"
      style="background: var(--ion-background-color);"
    />
  </ion-row>
  <ion-row>
    <ion-range
      v-model="innerRecord.value"
      :min="innerRecord.min"
      :max="innerRecord.max"
    />
  </ion-row>
  <ion-row class="ion-justify-content-center ion-margin-top">
    <ion-button
      shape="round"
      @click="submit"
    >
      <ion-icon
        slot="icon-only"
        icon="checkmark"
      />
    </ion-button>
  </ion-row>
</template>

<script lang="ts">
import { IonRow, IonRange, IonInput, IonButton, IonIcon } from '@ionic/vue'
import { defineComponent, PropType } from 'vue'
import { Record } from '@/objects'

export default defineComponent({
  name: 'CocoroRecordForm',
  components: {
    IonRow,
    IonRange,
    IonInput,
    IonButton,
    IonIcon,
  },
  props: {
    record: {
      type: Object as PropType<Record>,
      required: true,
    },
  },
  emits: ['submit'],
  data: (vm) => ({ innerRecord: { ...vm.record }}),
  watch: {
    record(v) {
      this.innerRecord = { ...v }
    },
  },
  methods: {
    submit() {
      this.$emit('submit', this.innerRecord)
    },
  },
})
</script>
