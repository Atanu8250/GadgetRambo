// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD74e2H7uht3NwRKkkByzDVJ4bhQvkzwCU",
    authDomain: "gadget-rambo.firebaseapp.com",
    projectId: "gadget-rambo",
    storageBucket: "gadget-rambo.appspot.com",
    messagingSenderId: "923078307350",
    appId: "1:923078307350:web:048a479554443f1a7b8f37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();