import firebase from 'firebase';
import { initializeFirebase } from '../config';

initializeFirebase();
const database = firebase.database();

export const getCurrentTemperature = async () => {
    let result = '';
    const eventref = database.ref('/temperature');
    const snapshot = await eventref
        .orderByChild('createdAt')
        .limitToLast(1)
        .once('value');
    snapshot.forEach(child => {
        result = child.val();
    });
    return result;
};
