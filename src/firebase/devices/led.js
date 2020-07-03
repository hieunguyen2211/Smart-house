import firebase from 'firebase';
import { initializeFirebase } from '../config';

initializeFirebase();
const database = firebase.database();

export const getAllLeds = async () => {
    const eventref = database.ref('/leds');
    const snapshot = await eventref.once('value');
    return Object.entries(snapshot.val());
};

export const getCurrentLed = async (roomName) => {
    const path = `/leds/${roomName.toUpperCase().replace(/\s+/g, '')}`;
    const eventref = database.ref(path);
    const snapshot = await eventref.once('value');
    return snapshot.val();
};

export const updateStatusLed = (status, roomName) => {
    const statusObj = {
        status: status ? 1 : 0,
    };

    const updates = {};
    const path = `/leds/${roomName.toUpperCase().replace(/\s+/g, '')}`;
    updates[path] = statusObj;
    return database.ref().update(updates);
};
