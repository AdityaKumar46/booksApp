import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
require('dotenv').config()

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,//"AIzaSyD0P3C5z9i3IsPfIkPfdjRee_2UTuQ9XDI",
    authDomain: "auth-dev-e5920.firebaseapp.com",
    projectId: "auth-dev-e5920",
    storageBucket: "auth-dev-e5920.appspot.com",
    messagingSenderId: "194332785091",
    appId: "1:194332785091:web:bdf5f20f210863bd55e576"
});

export const auth = app.auth();
export default app;