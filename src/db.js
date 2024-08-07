import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "contact-book-83bac.firebaseapp.com",
  projectId: "contact-book-83bac",
  storageBucket: "contact-book-83bac.appspot.com",
  messagingSenderId: "1063227077286",
  appId: "1:1063227077286:web:97ea303cee3be1d62f7a67",
  measurementId: "G-QQYM33W8KF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
