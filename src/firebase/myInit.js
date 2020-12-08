import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDPz9fUJYiMoDWLBG3o0Dqr2TvBUvltf6Q",
    authDomain: "mysiteproject-8adcf.firebaseapp.com",
    databaseURL: "https://mysiteproject-8adcf.firebaseio.com",
    projectId: "mysiteproject-8adcf",
    storageBucket: "mysiteproject-8adcf.appspot.com",
    messagingSenderId: "336655212375",
    appId: "1:336655212375:web:3a935e0a052104b762a812",
    measurementId: "G-XKXP582K1W"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const storage = firebase.storage();

  export {storage,database, firebase as default};
 