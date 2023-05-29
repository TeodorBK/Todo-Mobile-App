import { initializeApp } from 'firebase/app';
//import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBqbH7AKGyffVceo5f8-3sbMrvAhbiIZFA',
  authDomain: 'todo-mobile-app-106af.firebaseapp.com',
  projectId: 'todo-mobile-app-106af',
  storageBucket: 'todo-mobile-app-106af.appspot.com',
  messagingSenderId: '405241122657',
  appId: '1:405241122657:web:cbedf23662427a449d7f20',
};

export const FIREBASEAPP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASEAPP);
//export const FIREBASE_AUTH = getAuth(FIREBASEAPP);
FIRESTORE_DB;
