<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { defineComponent } from 'vue'
import * as db from '@/db'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  async created() {
    await db.prepare()
  },
})
</script>
