import firebase from 'firebase'

const firebaseApp= firebase.initializeApp({
   
    apiKey: "AIzaSyDyjROK5XQd8QHKJFa0gh2nsqQmBSJtmyQ",
    authDomain: "shirshaktodoapp.firebaseapp.com",
    databaseURL: "https://shirshaktodoapp.firebaseio.com",
    projectId: "shirshaktodoapp",
    storageBucket: "shirshaktodoapp.appspot.com",
    messagingSenderId: "26807603521",
    appId: "1:26807603521:web:b15af524773f13b96911c0",
    measurementId: "G-73G4XWSZ6L"
})

const db = firebaseApp.firestore();
export default db;