<template>
  <IonPage>
    <IonContent :fullscreen="true">
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">
            Blank
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <div id="container">
        content
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
})
</script>

<style scoped>
</style>
