import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC5MAamxpV2HmQAbcsONAkgI7tntjIu6Jo",
  authDomain: "disney-plus-clone-5e245.firebaseapp.com",
  projectId: "disney-plus-clone-5e245",
  storageBucket: "disney-plus-clone-5e245.appspot.com",
  messagingSenderId: "343287083013",
  appId: "1:343287083013:web:78570b07a9232d39e2ac6c",
  measurementId: "G-2EXYV3LHYR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export const storage = getStorage(firebaseApp);

export { auth, provider };
export default db;