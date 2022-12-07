import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc,  } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLT0fOLy-Ckz_HrydChMp0f2mxxxuhN9I",
  authDomain: "project-nr1-975b1.firebaseapp.com",
  projectId: "project-nr1-975b1",
  storageBucket: "project-nr1-975b1.appspot.com",
  messagingSenderId: "577992837242",
  appId: "1:577992837242:web:9d94b9c5d35ee1d0d213c3"
};

// Initialize Firebase
/* eslint-disable no-unused-vars */
const app = initializeApp(firebaseConfig);
/* eslint-disable no-unused-vars */

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ 
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
 
export const createUserDocumentFromAuth = async (userAuth, additionalInformation ) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user ', error.message );
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

