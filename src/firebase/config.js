import firebase from 'firebase/app';
import 'firebase/database';
var firebaseConfig = {
    apiKey: 'AIzaSyArYXqzPvO93ivrvMBbNYjRvFuI2KFXdng',
    authDomain: 'vdk-final.firebaseapp.com',
    databaseURL: 'https://vdk-final.firebaseio.com',
    projectId: 'vdk-final',
    storageBucket: 'vdk-final.appspot.com',
    messagingSenderId: '680679802982',
    appId: '1:680679802982:web:33c5f6ca5b950cda1345a7',
    measurementId: 'G-EYPER702FL',
};

export const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};
