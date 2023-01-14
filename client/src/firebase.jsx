import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore" 
<<<<<<< HEAD
=======
import { getDatabase } from "firebase/database";

>>>>>>> f2f8f1b (changes)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey, 
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
<<<<<<< HEAD
=======
export const database = getDatabase(app);
>>>>>>> f2f8f1b (changes)

export default app


