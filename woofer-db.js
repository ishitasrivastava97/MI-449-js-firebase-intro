/* global firebase addWoofRow updateWoofRow deleteWoofRow */

// NOTE:
//   Ignore the comments with "eslint" -- those comments are telling
//   the linter it can safely hide the errors on those lines.

// TODO Sign into Firestore

console.log("woofer-db.js start");
// CREATE a new woof in the database
function createWoofInDatabase (woof) { // eslint-disable-line no-unused-vars
  // TODO create a new document in the collection
	db.collection('woofs').add({
	  created_at: woof.created_at,
	  text: woof.text
	})
	.then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
		addWoofRow(docRef.id,woof);
	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	});
    
}

// READ from Firestore when woofs are added, modified, or removed
// Call one of the following functions for each changed document:
//  1. addWoofRow(<woofKey>, <woof>)
//  2. updateWoofRow(<woofKey>, <woof>)
//  3. deleteWoofRow(<woofKey>)
// Make sure to pass the correct parameters!
function readWoofsInDatabase () {
  // TODO read added, modified, and removed documents
  
	db.collection('woofs')
	.get()
	.then(function (snapshot) {
    snapshot.forEach(function (doc) {
      woofs[doc.id] = doc.data();
	  addWoofRow(doc.id,{created_at: doc.data().created_at,text:doc.data().text});
    })
     
})
}




// UPDATE the woof in the database
function updateWoofInDatabase (woofKey, woofText) { // eslint-disable-line no-unused-vars
  // TODO update the document in the collection
	db.collection("woofs").doc(woofKey).set({
		text: woofText
	},{ merge: true })
	.then(() => {
		
		console.log("Document successfully written!");
		updateWoofRow(woofKey,{text:woofText});
		console.log("Document successfully written 1!");
	})
	.catch((error) => {
		console.error("Error writing document: ", error);
	});

  //firebase.collection('woofs').doc(woofKey).set(woofText);
}

// DELETE the woof from the database
function deleteWoofFromDatabase (woofKey) { // eslint-disable-line no-unused-vars
  // TODO delete the document from the collection
  db.collection("woofs").doc(woofKey).delete();
  deleteWoofRow (woofKey);
  //firebase.collection('woofs').doc(woofKey).delete();
}

// Load all of the data
readWoofsInDatabase()

db.collection('woofs')
  .onSnapshot(function (snapshot) {
    snapshot.docChanges().forEach(function (change) {
      const woof = change.doc.data()
      if (change.type === 'added') {
        console.log("Master Added change.");
        
      } else if (change.type === 'modified') {
		console.log("Master modified change.");

      } else if (change.type === 'removed') {
		console.log("Master delete change.");

      }
    })
  })
