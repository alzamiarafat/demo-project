// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

// const firebaseConfig = firebase.initializeApp({
//     apiKey: process.env.FIREBASE_APP_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
// })

// export const auth = firebaseConfig.auth();

// export default  firebaseConfig;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFHP2BgF9FqQk8hGvi-PYqMhruFA7gqjY",
  authDomain: "react-demo-project-c04be.firebaseapp.com",
  projectId: "react-demo-project-c04be",
  storageBucket: "react-demo-project-c04be.appspot.com",
  messagingSenderId: "827114843702",
  appId: "1:827114843702:web:af3e33077d3aeaa3dfb297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);