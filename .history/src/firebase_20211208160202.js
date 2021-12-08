import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: "auth-dev-e5920.firebaseapp.com",
    projectId: "auth-dev-e5920",
    storageBucket: "auth-dev-e5920.appspot.com",
    messagingSenderId: "194332785091",
    appId: "1:194332785091:web:bdf5f20f210863bd55e576"
});

export const auth=app.auth();
export default app;