import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyA1NUWAaNwMCAOt8HM4dryyMJoRpOM476s',
  authDomain: 'crown-db-466e4.firebaseapp.com',
  projectId: 'crown-db-466e4',
  storageBucket: 'crown-db-466e4.appspot.com',
  messagingSenderId: '1084918115925',
  appId: '1:1084918115925:web:fe432e7a309b2d4f332edc',
  measurementId: 'G-BP6EMKFX8E',
};

const firebase = initializeApp(config);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const firestore = getFirestore();
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth!.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
