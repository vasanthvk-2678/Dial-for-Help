import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBXeo6lf_JroO5PcAEqLAvW3PsqJOmIzq4",
    authDomain: "login-4c8b1.firebaseapp.com",
    projectId: "login-4c8b1",
    storageBucket: "login-4c8b1.appspot.com",
    messagingSenderId: "444738084395",
    appId: "1:444738084395:web:feffbde0d3860ee092146e"
};
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig).firestore();

export default fire;

