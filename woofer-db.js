/* global firebase */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqk9R6en-cRoD9nHTLKng5Yx5KON_7fM8',
  authDomain: 'woofer-814a8.firebaseapp.com',
  projectId: 'woofer-814a8',
  storageBucket: 'woofer-814a8.appspot.com',
  messagingSenderId: '673284426935',
  appId: '1:673284426935:web:d6eba3002d2760beef1132'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) { // eslint-disable-line no-unused-vars
  firebase.collection('woofs').createWoof(woof)
}

// READ from Firestore when woofs are added, modified, or removed
// Call one of the following functions for each changed document:
//  1. addWoofRow(<woofKey>, <woof>)
//  2. updateWoofRow(<woofKey>, <woof>)
//  3. deleteWoofRow(<woofKey>)
// Make sure to pass the correct parameters!
function readWoofsInDatabase () {
  firebase.collection('woofs').addWoofRow()
  firebase.collection('woofs').updateWoofRow()
  firebase.collection('woofs').deleteWoofRow()
}

// UPDATE the woof in the database
function updateWoofInDatabase (woofKey, woofText) { // eslint-disable-line no-unused-vars
  // TODO update the document in the collection
  firebase.collection('woofs').doc('woofKey').set('woofText')
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) { // eslint-disable-line no-unused-vars
  firebase.collection('woofs').doc('woofKey').delete()
}

// Load all of the data
readWoofsInDatabase()
