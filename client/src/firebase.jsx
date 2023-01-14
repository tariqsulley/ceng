import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDabaSs2mmdODNHl9HIpoZLbXQFixLGPE8", 
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app


