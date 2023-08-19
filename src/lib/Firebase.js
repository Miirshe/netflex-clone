// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD6Rm5Ogy6uwbKdJZlSvmDdEwoSbb_2abw",
    authDomain: "netflex-clone-5e76f.firebaseapp.com",
    projectId: "netflex-clone-5e76f",
    storageBucket: "netflex-clone-5e76f.appspot.com",
    messagingSenderId: "996407829594",
    appId: "1:996407829594:web:ba05ac89764bae6be22463",
    measurementId: "G-LBLRET31CY"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();