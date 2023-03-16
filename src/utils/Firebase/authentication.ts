// https://console.firebase.google.com/u/0/project/anilearn-v2/authentication/users

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHpPZ2axUpNN0pTF1cleIfXNQBCRZ47K0",
  authDomain: "anilearn-v2.firebaseapp.com",
  projectId: "anilearn-v2",
  storageBucket: "anilearn-v2.appspot.com",
  messagingSenderId: "1002911157226",
  appId: "1:1002911157226:web:b1121e662cec10d1298093",
};

const app = initializeApp(firebaseConfig);

export const auth: any = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogleProvider = async () => {
  return signInWithPopup(auth, googleProvider);
};

export const db = getFirestore();

export const savingUserInformation = async (
  userAuth: any,
  AdditionalInformation?: any
) => {
  const docRef = doc(db, "users", userAuth.uid);
  const { displayName, email, photoURL, uid } = userAuth;

  const createdAt = serverTimestamp();

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    await setDoc(docRef, {
      displayName,
      email,
      photoURL,
      uid,
      createdAt,
      ...AdditionalInformation,
    });
  }

  if (auth.currentUser.emailVerified == false) {
    sendEmailVerification(auth.currentUser).then(() => console.log("sent"));
  }
};

export const isSignedIn = (callback: any) => {
  return onAuthStateChanged(auth, callback);
};

export const createWithEmailAndPasswordAuth = (
  email: string,
  password: string
) => createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmailAndPasswordAuth = (
  email: string,
  password: string
) => signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);
