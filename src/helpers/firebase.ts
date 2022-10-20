import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const apiKey = import.meta.env.VITE_APIKEY;
const authDomain = import.meta.env.VITE_AUTHDOMAIN;
const projectId = import.meta.env.VITE_PROJECTID;
const storageBucket = import.meta.env.VITE_STORAGEBUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGINGSENDERID;
const appId = import.meta.env.VITE_APPID;
const databaseURL = import.meta.env.VITE_DATABASEURL;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  databaseURL,
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
