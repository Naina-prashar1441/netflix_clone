// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkcfD5RuMKkn5jCbbPoaAKBynJZ-V4LI4",
  authDomain: "netflix-clone-267da.firebaseapp.com",
  projectId: "netflix-clone-267da",
  storageBucket: "netflix-clone-267da.appspot.com",
  messagingSenderId: "1022285597635",
  appId: "1:1022285597635:web:19f6b5a30fcb0ad0d38b76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()

export const database = getFirestore(app)
