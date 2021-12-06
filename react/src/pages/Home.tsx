import { useEffect, useState } from 'react';
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
} from '@ionic/react';
import { format, parseISO } from 'date-fns';

import './Home.css';

const Home: React.FC = () => {
  const [formattedDate, setFormattedDate] = useState<string>();
  const [dateValue, setDateValue] = useState<string>();
    
    useEffect(() => {
      if (dateValue === undefined) { return; }
      
      const formattedValue = format(parseISO(dateValue!), 'MMM d, yyyy');
      console.log('abc',formattedValue)
      setFormattedDate(formattedValue)
    }, [dateValue]);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem button={true} id="open-datetime">
          <IonLabel>Birthday</IonLabel>
          
          { formattedDate !== undefined ? <IonText>{ formattedDate }</IonText> : <IonText class="placeholder">Select a date</IonText>}
          
          {/* See styles in Home.css */}
          <IonModal class="datetime-modal" trigger="open-datetime">
            <IonContent>
              <IonDatetime
                value={dateValue}
                showDefaultButtons={true}
                onIonChange={(ev: any) => {
                  setDateValue(ev.detail.value);
                }}
              ></IonDatetime>
            </IonContent>
          </IonModal>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
