import firebase from "./firebase";

// Firebase configuration file -> gives us access to the actual db
const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// firestore is the actual db
const db = firebaseApp.firestore();

// to be able to log in and log out
const auth = firebase.auth();

// using Google authentication
const provider = new firebase.auth.GoogleAuthProvider();

// to store changes
const storage = firebase.storage();

export { auth, provider, storage };
export default db;