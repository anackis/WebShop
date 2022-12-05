import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc,  } from 'firebase/firestore'

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
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ 
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
 
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user ', error.message );
    }
  }
  return userDocRef;

}
