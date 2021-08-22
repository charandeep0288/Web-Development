// import nahi karna chahia firebase koo
// import firebase from "firebase";
import firebase from "firebase/app";


import "firebase/firestore";


// keys to connect your project to google firebase 
var firebaseConfig = {
    apiKey: "AIzaSyCWbFtJUYhPsLWISX20h6EmUbcTH9y29Ko",
    authDomain: "anonymous-twitter-4c439.firebaseapp.com",
    projectId: "anonymous-twitter-4c439",
    storageBucket: "anonymous-twitter-4c439.appspot.com",
    messagingSenderId: "223668767026",
    appId: "1:223668767026:web:22be455c85129a336f6f2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // firestore -> data base hai
  export const firestore = firebase.firestore(); // root of firestore

  export default firebase;