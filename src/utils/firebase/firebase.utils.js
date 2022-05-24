import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXZDWGPQC6IzxakKPbrAGSX142q04YUNM",
  authDomain: "mart-e4650.firebaseapp.com",
  projectId: "mart-e4650",
  storageBucket: "mart-e4650.appspot.com",
  messagingSenderId: "922406893967",
  appId: "1:922406893967:web:47f8139498460520edb3fa"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
