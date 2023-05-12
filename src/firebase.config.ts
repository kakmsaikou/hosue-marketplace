import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCmCd7cMpFfH02jOZEJuxn8AnN4O_-Cw48',
  authDomain: 'house-marketplace-app-tacitus.firebaseapp.com',
  projectId: 'house-marketplace-app-tacitus',
  storageBucket: 'house-marketplace-app-tacitus.appspot.com',
  messagingSenderId: '987737880745',
  appId: '1:987737880745:web:cccbe7a9988da911c0d1b8',
};

export const db = getFirestore(initializeApp(firebaseConfig));
