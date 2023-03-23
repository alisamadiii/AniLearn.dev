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
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
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
