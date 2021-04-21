/* global firebase addWoofRow updateWoofRow deleteWoofRow */

// NOTE:
//   Ignore the comments with "eslint" -- those comments are telling
//   the linter it can safely hide the errors on those lines.

// TODO Sign into Firestore

console.log("woofer-db.js start");
// CREATE a new woof in the database
function createWoofInDatabase (woof) { // eslint-disable-line no-unused-vars
  // TODO create a new document in the collection
	db.collection('woofs').add(woof);
   
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
	  .onSnapshot(function (snapshot) {

		snapshot.docChanges().forEach(function (change) {
		  
		  const woof = change.doc.data();
		  const woofKey = change.doc.id;
          //alert(woof.text);
		  //alert(woofs[change.doc.id].created_at);
		  //alert(woofs[change.doc.id].text);
		  //alert(change.type);
		  
		  if (change.type === 'added') {
			addWoofRow(woofKey,woof);
			
		  } else if (change.type === 'modified') {
			updateWoofRow(woofKey,woof);

		  } else if (change.type === 'removed') {
			deleteWoofRow (woofKey);

		  }
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
		

		//updateWoofRow(woofKey,{text:woofText});
		console.log("Document successfully written !");
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
  //deleteWoofRow (woofKey);

}

// Load all of the data
readWoofsInDatabase()





