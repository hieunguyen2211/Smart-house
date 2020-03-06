import firebase from 'firebase';
import { initializeFirebase } from '../config';

initializeFirebase();
const database = firebase.database();

export const getCurrentLed = async () => {
    let result = '';
    const eventref = database.ref('/leds');
    const snapshot = await eventref
        .orderByChild('createdAt')
        .limitToLast(1)
        .once('value');
    snapshot.forEach(child => {
        result = child.val();
    });
    return result;
};

export const updateStatusLed = status => {
    const statusObj = {
        status: status ? 1 : 0
    };

    const updates = {};
    updates['/leds/LIVINGROOM'] = statusObj;
    return database.ref().update(updates);
};
