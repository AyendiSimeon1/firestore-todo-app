import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC-tHTtFSB7lZE1ZUHmkpV8JIL9XfKaWQ8",
    authDomain: "todoapp-7ebd9.firebaseapp.com",
    projectId: "todoapp-7ebd9",
    storageBucket: "todoapp-7ebd9.appspot.com",
    messagingSenderId: "229034750673",
    appId: "1:229034750673:web:dab208c079125da6174bf0",
    measurementId: "G-56ZW81DGPL"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;