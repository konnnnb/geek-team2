import firebase from "firebase";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBKEI_3l35ME_NxSizCLZhOWFe9R0slN8k",
  authDomain: "hitorio.firebaseapp.com",
  projectId: "hitorio",
  storageBucket: "hitorio.appspot.com",
  messagingSenderId: "336033621372",
  appId: "1:336033621372:web:fc3419244d99c1371930f9",
  measurementId: "G-N64D4DZNF5"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
