<template>
  <ion-list>
    <CocoroItemBox
      :key="item.id"
      v-for="item in items"
      :item="item"
    />
  </ion-list>
</template>

<script lang="ts">
import { IonList } from '@ionic/vue'
import { defineComponent, PropType } from 'vue'
import { Item } from '@/db'
import CocoroItemBox from './CocoroItemBox.vue'

export default defineComponent({
  name: 'CocoroItemList',
  props: {
    items: Array as PropType<Item[]>
  },
  components: {
    IonList,
    CocoroItemBox,
  },
})
</script>
