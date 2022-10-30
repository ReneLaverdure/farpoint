// Import the functions you need from the SDKs you need
// import { async } from "@firebase/util";
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
    NextOrObserver} from "firebase/auth"

import { 
  getFirestore, 
  doc, 
  getDoc,
  getDocs, 
  setDoc,
  collection,
  writeBatch,
  query,
  QueryDocumentSnapshot
 } from 'firebase/firestore';
import Q from "q";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApLJ2MUTlvnbYqmIKXgl_PfV-MeBTPcxE",
  authDomain: "farpoint-41c26.firebaseapp.com",
  projectId: "farpoint-41c26",
  storageBucket: "farpoint-41c26.appspot.com",
  messagingSenderId: "481374303461",
  appId: "1:481374303461:web:c83ae708e06341bb96900c",
  measurementId: "G-CQ965DBQ4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
  });

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export type ObjectToAdd = {
  title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd> (
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  });

  await batch.commit();
  console.log('done')
}

//promise category array
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef)

  // console.log(q)
  const querySnapshot = await getDocs(q);
  // as category type
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const {title,items} = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {})

  // return categoryMap
}

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  createAt: Date;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error);
      }
    }
  
    return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};


export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);