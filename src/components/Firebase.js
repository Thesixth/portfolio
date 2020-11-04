import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyC3pPKx-cP6bLZS30hAuM7BxLR_Ydd2w9Q",
    authDomain: "react-contact-form-5ade1.firebaseapp.com",
    databaseURL: "https://react-contact-form-5ade1.firebaseio.com",
    projectId: "react-contact-form-5ade1",
    storageBucket: "react-contact-form-5ade1.appspot.com",
    messagingSenderId: "1085503032914",
    appId: "1:1085503032914:web:7603b3b7af2d7cb04f998b"
});

var db = firebaseApp.firestore();

export { db };