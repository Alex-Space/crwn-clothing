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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
    console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;