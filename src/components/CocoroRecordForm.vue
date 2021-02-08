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
    <template v-if="isNumber">
      <ion-col>
        <ion-range
          v-model="innerRecord.value"
          :min="innerRecord.min"
          :max="innerRecord.max"
        />
      </ion-col>
      <ion-col size="3">
        <ion-input
          v-model="innerRecord.value"
          type="number"
          style="background: var(--ion-background-color);"
        />
      </ion-col>
    </template>
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
import { IonRow, IonCol, IonRange, IonInput, IonButton, IonIcon } from '@ionic/vue'
import { defineComponent, PropType } from 'vue'
import { Record, RecordValueKind } from '@/store'

export default defineComponent({
  name: 'CocoroRecordForm',
  components: {
    IonRow,
    IonCol,
    IonRange,
    IonInput,
    IonButton,
    IonIcon,
  },
  props: {
    valueKind: {
      type: String as PropType<RecordValueKind>,
      required: true,
    },
    record: {
      type: Object as PropType<Record>,
      required: true,
    },
  },
  emits: ['submit'],
  data: (vm) => ({ innerRecord: { ...vm.record }}),
  computed: {
    isNumber(): boolean {
      return this.valueKind === 'number'
    },
  },
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
