import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAg1VVAFqqPBHQ_upwg7IZOThJoXB9UOdg",
  authDomain: "blogpage-f39b9.firebaseapp.com",
  projectId: "blogpage-f39b9",
  storageBucket: "blogpage-f39b9.appspot.com",
  messagingSenderId: "313254301349",
  appId: "1:313254301349:web:a76e4686008b27a458474c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
