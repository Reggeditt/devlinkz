import { initializeApp } from "firebase/app";
import {collection, initializeFirestore, persistentLocalCache} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASEMESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {localCache: persistentLocalCache({synchronizeTabs: true})});

export const usersCollection = collection(db, 'users');
export const profilesCollection = collection(db, 'profiles');

export const auth = getAuth(app);
