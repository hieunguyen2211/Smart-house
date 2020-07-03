import firebase from 'firebase';
import { initializeFirebase } from '../config';

initializeFirebase();
const database = firebase.database();

export const getCurrentSensor = (payload) => {
  const eventref = database.ref('/sensor/BATHROOM');
  eventref
    // .orderByChild('createdAt')
    .limitToLast(1)
    .on('value', (snapshot) => {
      const val = snapshot.val();
      console.log(val[Object.keys(val)[0]]);

      payload = val[Object.keys(val)[0]];
    });
  return payload;
};
