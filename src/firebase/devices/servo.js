import firebase from 'firebase';
import { initializeFirebase } from '../config';

initializeFirebase();
const database = firebase.database();

export const getAllServos = async () => {
  const eventref = database.ref('/servo');
  const snapshot = await eventref.once('value');
  return Object.entries(snapshot.val());
};

export const getCurrentServo = async (servoName) => {
  const path = `/servo/${servoName.toUpperCase().replace(/\s+/g, '')}`;
  const eventref = database.ref(path);
  const snapshot = await eventref.once('value');
  return snapshot.val();
};

export const updateStatusServo = (status, name) => {
  const statusObj = {
    status: status ? 1 : 0,
  };
  const updates = {};
  const path = `/servo/${name.toUpperCase().replace(/\s+/g, '')}`;
  updates[path] = statusObj;
  return database.ref().update(updates);
};
