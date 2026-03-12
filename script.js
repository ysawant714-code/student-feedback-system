const firebaseConfig = {
  apiKey: "AIzaSyCZ1-3eq5x1TDDKnTFGO8yqjpU61p_WaY4",
  authDomain: "student-feedback-system-b614a.firebaseapp.com",
  projectId: "student-feedback-system-b614a",
  storageBucket: "student-feedback-system-b614a.firebasestorage.app",
  messagingSenderId: "430974324749",
  appId: "1:430974324749:web:c0e0bc702f00ab98764544",
  measurementId: "G-NTSHN0SNHR"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

document.getElementById("feedbackForm").addEventListener("submit", function(e){

e.preventDefault();

var name=document.getElementById("name").value;
var type=document.getElementById("type").value;
var topic=document.getElementById("topic").value;
var rating=document.getElementById("rating").value;
var comment=document.getElementById("comment").value;

db.collection("feedback").add({

name:name,
type:type,
topic:topic,
rating:rating,
comment:comment

})

.then(function(){

alert("Feedback Submitted Successfully");

document.getElementById("feedbackForm").reset();

})

.catch(function(error){

alert("Error: "+error);

});

});