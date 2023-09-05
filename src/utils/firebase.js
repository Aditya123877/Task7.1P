import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCxlAaYoCMyp0bYGfMlQfqPthZCJ5r0lFo",
    authDomain: "deakin-web-app-ff0fd.firebaseapp.com",
    projectId: "deakin-web-app-ff0fd",
    storageBucket: "deakin-web-app-ff0fd.appspot.com",
    messagingSenderId: "180227729181",
    appId: "1:180227729181:web:bc63afd31f5da849e3a3f4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters ({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocFromAuth= async (userAuth, additionalInformation={}) =>{
    if(!userAuth.email) return;
    const userDocRef = doc (db, 'users', userAuth.uid);
   

    const userSnapshot = await getDoc(userDocRef);
    

    if (!userSnapshot.exists())
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        })
    }
    catch(error){
    console.log('error in creating', error.message);
    }
}
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}