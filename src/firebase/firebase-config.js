import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCAPCe57m2kwnxhGhOoHDj1MYelYdcYVVg",
    authDomain: "react-app-fd28a.firebaseapp.com",
    projectId: "react-app-fd28a",
    storageBucket: "react-app-fd28a.appspot.com",
    messagingSenderId: "943378561236",
    appId: "1:943378561236:web:12d3d0f8853145dc3c6341"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}