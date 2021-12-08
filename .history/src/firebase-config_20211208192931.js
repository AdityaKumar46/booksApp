import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.apiKey,//"AIzaSyD0P3C5z9i3IsPfIkPfdjRee_2UTuQ9XDI",
    authDomain: "auth-dev-e5920.firebaseapp.com",
    projectId: "auth-dev-e5920",
    storageBucket: "auth-dev-e5920.appspot.com",
    messagingSenderId: "194332785091",
    appId: "1:194332785091:web:bdf5f20f210863bd55e576"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);