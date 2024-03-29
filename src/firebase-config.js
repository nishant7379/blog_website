import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBe1exUjS-mB7HWKOi9rRCYQVlhEPB6rGE",
  authDomain: "blog-react-2bfb7.firebaseapp.com",
  projectId: "blog-react-2bfb7",
  storageBucket: "blog-react-2bfb7.appspot.com",
  messagingSenderId: "150135533430",
  appId: "1:150135533430:web:ba8b58cae23ee0642f1457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();