import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  CollectionReference,
  collection,
  DocumentData,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

import { CustomUser } from '../models/custom-user';

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

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export const usersCol = createCollection<CustomUser>('users');

export const createUserProfileDocument = async (
  userAuth: User | null,
  additionalData?: any
) => {
  if (!userAuth) {
    return null;
  }

  const userRef = doc(usersCol, userAuth.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = Date.now();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err: any) {
      console.log('Error when creating user.', err.message);
    }
  }

  return userRef;
};

export default firebase;
