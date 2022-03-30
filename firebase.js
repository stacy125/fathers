// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0e9LwXN1a4IlgGjHtJoZeH3JxKNVb-ok",
    authDomain: "fatherhoodislit-a482b.firebaseapp.com",
    projectId: "fatherhoodislit-a482b",
    storageBucket: "fatherhoodislit-a482b.appspot.com",
    messagingSenderId: "147309702638",
    appId: "1:147309702638:web:f22202b8d74ca05be0f2ff",
    measurementId: "G-241L4NFCZ9"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

// const auth = firebase.auth(app)
export const auth = getAuth(app)
// export const analytics = getAnalytics(app);

