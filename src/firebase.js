import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAW_zNfGGnRUZ3qp4L2TMHavg14PJ8m7Fk",
    authDomain: "coastal-haven-196323.firebaseapp.com",
    databaseURL: "https://coastal-haven-196323-default-rtdb.firebaseio.com",
    projectId: "coastal-haven-196323",
    storageBucket: "coastal-haven-196323.appspot.com",
    messagingSenderId: "494124905574",
    appId: "1:494124905574:web:5503480450ddda6fbde9a7",
    measurementId: "G-65WR5HK210"
});

const db = firebaseApp.firestore();

export { db };