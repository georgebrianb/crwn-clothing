import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA9knMG6h8o532jyUJEkn4oU6Z1s3RhGXU",
  authDomain: "crwn-db-33a07.firebaseapp.com",
  projectId: "crwn-db-33a07",
  storageBucket: "crwn-db-33a07.appspot.com",
  messagingSenderId: "883781683255",
  appId: "1:883781683255:web:8306f4a413c85934d4d7b2",
  measurementId: "G-BFYW5YXLPG",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
