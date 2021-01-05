import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBam55xkiAIn06WrYGN352jR0uTMwPH54k",
  authDomain: "morgan-db.firebaseapp.com",
  projectId: "morgan-db",
  storageBucket: "morgan-db.appspot.com",
  messagingSenderId: "1087184006228",
  appId: "1:1087184006228:web:9bea16e3295254195691c1",
  measurementId: "G-KML78VM4JJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const google = new firebase.auth.GoogleAuthProvider();
google.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(google);

const facebook = new firebase.auth.FacebookAuthProvider();
facebook.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(facebook)

export default firebase;