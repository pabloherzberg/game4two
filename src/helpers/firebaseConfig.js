import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBAKVZ7G_tBkRgu8PbJSYvOIfW7GVI3iG8",
  authDomain: "game4two-2d759.firebaseapp.com",
  databaseURL: "https://game4two-2d759-default-rtdb.firebaseio.com",
  projectId: "game4two-2d759",
  storageBucket: "game4two-2d759.appspot.com",
  messagingSenderId: "719313130383",
  appId: "1:719313130383:web:05ce131ebb961ced6f71fa",
  measurementId: "G-BRSVVCVGNK",
};

export default function initFirebase() {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
