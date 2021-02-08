<template>
  <ion-list style="background: var(--ion-background-color);">
    <CocoroItemBox
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </ion-list>
</template>

<script lang="ts">
import { IonList } from '@ionic/vue'
import { defineComponent, PropType } from 'vue'
import { Item } from '@/store'
import CocoroItemBox from './CocoroItemBox.vue'

export default defineComponent({
  name: 'CocoroItemList',
  components: {
    IonList,
    CocoroItemBox,
  },
  props: {
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    },
  },
})
</script>
