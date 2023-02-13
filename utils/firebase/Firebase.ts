import { initializeApp } from "firebase/app";
import { getFirestore, writeBatch, collection, doc } from "firebase/firestore";

import { Testimonial } from "@/content/Testimonial";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const sendingTestimonialToDB = async () => {
  const colRef = collection(db, "testimonial");
  const batch = writeBatch(db);

  Testimonial.forEach((message) => {
    const docRef = doc(
      colRef,
      message.name.toLocaleLowerCase().split(" ").join("_")
    );
    batch.set(docRef, message);
  });

  await batch.commit();
  console.log("added");
};
