import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonDatetime } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
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
        <IonItem>
          <IonLabel>Birthday</IonLabel>
          <IonDatetime
            displayFormat="MM/DD/YYYY"
            placeholder="Select a date"
          ></IonDatetime>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
