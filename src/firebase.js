import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFcHrSrEERXlxBs7UvyxHLnDKgiJFurFA",
    authDomain: "facebook-clone-db65b.firebaseapp.com",
    projectId: "facebook-clone-db65b",
    storageBucket: "facebook-clone-db65b.appspot.com",
    messagingSenderId: "611878492673",
    appId: "1:611878492673:web:19875cd85784c91150fe00",
    measurementId: "G-RWTEVHKVBR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;