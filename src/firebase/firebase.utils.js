import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDQmJ_KVWzw9sWm5LZgIMOY-4I1FhXX-pk",
    authDomain: "crwn-db-4fafe.firebaseapp.com",
    projectId: "crwn-db-4fafe",
    storageBucket: "crwn-db-4fafe.appspot.com",
    messagingSenderId: "33177637279",
    appId: "1:33177637279:web:115393fc11a78d45e36daa",
    measurementId: "G-GQ97MNLVCE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;