<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-item :button="true" id="open-datetime">
        <ion-label>Birthday</ion-label>
        
        <ion-text class="placeholder" v-if="formattedDate === undefined">Select a date</ion-text>
        <ion-text v-if="formattedDate !== undefined">{{ formattedDate }}</ion-text>
        
        <!-- See styles in global.css -->
        <ion-modal class="datetime-modal" trigger="open-datetime">
          <ion-content>
            <ion-datetime
              v-model="dateValue"
              :ionChange="formatDate()"
              :show-default-buttons="true"
            ></ion-datetime>
          </ion-content>
        </ion-modal>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
  IonDatetime,
  IonModal,
  IonText
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { format, parseISO } from 'date-fns';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonDatetime,
    IonModal,
    IonText
  },
  setup() {
    const formattedDate = ref();
    const dateValue = ref();
    
    const formatDate = () => {
      formattedDate.value = format(parseISO(dateValue.value), 'MMM d, yyyy');
    }
    
    return {
      dateValue,
      formattedDate,
      formatDate
    }
  }
});
</script>

<style scoped>
ion-text {
  color: var(--ion-text-color);
}

ion-text.placeholder {
  color: var(--ion-color-step-400, #999999);
}
</style>