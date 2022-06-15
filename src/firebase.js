import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKqHjJN0FxWhUR4R9gfQZxazS2CMo4iMA",
  authDomain: "burgerboss-5ee7b.firebaseapp.com",
  projectId: "burgerboss-5ee7b",
  storageBucket: "burgerboss-5ee7b.appspot.com",
  messagingSenderId: "647135257716",
  appId: "1:647135257716:web:9c04c976bc211148119d21",
  measurementId: "G-FBMTTZ9TG8"
};

initializeApp(firebaseConfig);
export const auth = getAuth;
