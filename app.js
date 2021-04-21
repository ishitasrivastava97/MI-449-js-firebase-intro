

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDgdK3eVyvg7yI1uR3oY2Cvn7vjvK1mG4g",
    authDomain: "msufs-21cb6.firebaseapp.com",
    projectId: "msufs-21cb6",
    storageBucket: "msufs-21cb6.appspot.com",
    messagingSenderId: "615680210657",
    appId: "1:615680210657:web:797569b12d08abe0daa9a0",
    measurementId: "G-E9KM3BMHDY"
  };
  // Initialize Firebase
  console.log("Initialize Firebase");
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  console.log(db);

