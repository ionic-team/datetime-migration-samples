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
    
      <ion-item
        :button="true"
        :detail="false" 
        @click="openDatetime()"
      >
        <ion-label>Click to open <code>ion-datetime</code></ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Default</ion-label>
        <ion-datetime
          ref="datetimeRef"
          placeholder="Date Placeholder"
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Custom Month/Day Names</ion-label>
        <ion-datetime
          display-format="DDDD, MMMM DD, YYYY"
          picker-format="DDDD MMM DD YYYY"
          :month-names="['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']"
          :month-short-names="['enero', 'feb', 'marzo', 'abr', 'mayo', 'jun', 'jul', 'agosto', 'sept', 'oct', 'nov', 'dic']"
          :day-names="['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueve', 'Viernes', 'Sabado']"
          :day-short-names="['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']"
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Custom Text/Placeholder</ion-label>
        <ion-datetime
          class="custom"
          placeholder="I am purple"
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Custom Display Format</ion-label>
        <ion-datetime
          display-format="MM/DD/YYYY"
        ></ion-datetime>
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
  IonDatetime
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';

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
    IonDatetime
  },
  setup() {
    const datetimeRef = ref();
    
    const openDatetime = () => {
      console.log(datetimeRef.value)
      if (!datetimeRef.value) { return; }
      
      datetimeRef.value.$el.open();
    }
    
    return {
      datetimeRef,
      openDatetime
    }
  }
});
</script>

<style scoped>
ion-datetime.custom::part(text),
ion-datetime.custom::part(placeholder) {
  font-weight: 700;
}

ion-datetime.custom {
  --placeholder-color: purple;
}
</style>