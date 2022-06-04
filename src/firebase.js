import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCSxwFE0pzShss-GJqVBzBCWB-I919l_vQ",
    authDomain: "crud-64841.firebaseapp.com",
    projectId: "crud-64841",
    storageBucket: "crud-64841.appspot.com",
    messagingSenderId: "10333241108",
    appId: "1:10333241108:web:13c57ede5fc4fdbe858c01"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export{firebase}