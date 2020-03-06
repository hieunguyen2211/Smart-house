import firebase from 'firebase/app';
import 'firebase/database';
var firebaseConfig = {
    apiKey: 'AIzaSyA-X7l1pe0aet3YJ10QD5srkW8E8O9webs',
    authDomain: 'vdkproject-43421.firebaseapp.com',
    databaseURL: 'https://vdkproject-43421.firebaseio.com',
    projectId: 'vdkproject-43421',
    storageBucket: 'vdkproject-43421.appspot.com',
    messagingSenderId: '1079412689137',
    appId: '1:1079412689137:web:b90674b5182a64f1d90150',
    measurementId: 'G-YVBBH6XCV1'
};

export const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};
