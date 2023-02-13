
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBJSpBhJD4btm0kk01Dz7hvB_HRhWkDGkw",
  authDomain: "confysloth.firebaseapp.com",
  projectId: "confysloth",
  storageBucket: "confysloth.appspot.com",
  messagingSenderId: "633846364417",
  appId: "1:633846364417:web:48e297aaaa5b31287e4300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()


export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      // const name = result.user.displayName;
      // const email = result.user.email;
      // const profilePic = result.user.photoURL;
      }).catch((error) =>{
        console.log(error)
      })
    }

export const auth = getAuth(app)


export const logOut = () => {
  signOut(auth);
 
};