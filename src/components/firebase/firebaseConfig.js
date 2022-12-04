
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAD1btJFmQ8e8cIrgHwo7ImUksgdd9l7fs",
  authDomain: "mi-primer-e-commerce-debeb.firebaseapp.com",
  projectId: "mi-primer-e-commerce-debeb",
  storageBucket: "mi-primer-e-commerce-debeb.appspot.com",
  messagingSenderId: "324920449164",
  appId: "1:324920449164:web:8d3323b99bfdcea2b2c3a9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);