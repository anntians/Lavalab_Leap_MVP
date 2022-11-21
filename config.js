import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHCfoiFFDGqQ2_nYSZJaeKjnNmHvU4Ows",
    authDomain: "leap-6f522.firebaseapp.com",
    projectId: "leap-6f522",
    storageBucket: "leap-6f522.appspot.com",
    messagingSenderId: "237100142562",
    appId: "1:237100142562:web:fe710a0ba8c0136a8073bb",
    measurementId: "G-7F0TZQKGTM"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);