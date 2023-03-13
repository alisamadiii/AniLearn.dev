import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, setDoc, doc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHpPZ2axUpNN0pTF1cleIfXNQBCRZ47K0",
  authDomain: "anilearn-v2.firebaseapp.com",
  projectId: "anilearn-v2",
  storageBucket: "anilearn-v2.appspot.com",
  messagingSenderId: "1002911157226",
  appId: "1:1002911157226:web:b1121e662cec10d1298093",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogleProvider = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const savingUserInformation = async (userAuth: any) => {
  const docRef = doc(db, "users", userAuth.uid);
  const { displayName, email, photoURL, uid } = userAuth;

  const createdAt = serverTimestamp();

  await setDoc(docRef, {
    displayName,
    email,
    photoURL,
    uid,
    createdAt,
  });
};
