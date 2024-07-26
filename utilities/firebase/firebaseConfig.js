import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_Y4trAefNSukWCtooW_VZE1dNgGolv6k",
  authDomain: "devlinks-17268.firebaseapp.com",
  projectId: "devlinks-17268",
  storageBucket: "devlinks-17268.appspot.com",
  messagingSenderId: "86360691879",
  appId: "1:86360691879:web:599bad7b8ecea4c714f782"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
