import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp ({

    apiKey: "AIzaSyCaqHUQfn87V1mDi8xsvjBdvWt8HXa17TI",
  
    authDomain: "twitterchat-8ce2c.firebaseapp.com",
  
    projectId: "twitterchat-8ce2c",
  
    storageBucket: "twitterchat-8ce2c.appspot.com",
  
    messagingSenderId: "879328690683",
  
    appId: "1:879328690683:web:c293000bca7432aa234b5e",
  
    measurementId: "G-YQ901HDF6K"
  
  });

  const db=firebaseApp.firestore()

  const auth = firebase.auth()

  export {db, auth}
  
  