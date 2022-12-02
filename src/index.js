import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOKke1AlqKip8E9kFqeQauoaEzsqRUFqg",
  authDomain: "boticueva-df5fc.firebaseapp.com",
  projectId: "boticueva-df5fc",
  storageBucket: "boticueva-df5fc.appspot.com",
  messagingSenderId: "845607379233",
  appId: "1:845607379233:web:873ff731637f7c860cde60"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
  
);
