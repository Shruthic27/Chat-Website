var firebaseConfig = {
    apiKey: "AIzaSyCyRVDhREN92YcxndYRiNgmGF5PnnMx4oc",
    authDomain: "kwitter-52a6b.firebaseapp.com",
    databaseURL: "https://kwitter-52a6b-default-rtdb.firebaseio.com",
    projectId: "kwitter-52a6b",
    storageBucket: "kwitter-52a6b.appspot.com",
    messagingSenderId: "507539309198",
    appId: "1:507539309198:web:bcbba4566825726c7dffdf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var N=""

  N=localStorage.getItem("Name")
  document.getElementById("n").innerHTML="Welcome "+N
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row= "<div id="+Room_names+" onclick=ar(this.id) class='room_name'>"+Room_names+"</div> <hr>"
   document.getElementById("output").innerHTML+=row
   //End code
   });});}
var Rn=""
function srn(){
Rn= document.getElementById("name").value
firebase.database().ref("/").child(Rn).update({purpose:"testing"})
localStorage.setItem("RoomName",Rn)
}
function ar(room){
  localStorage.setItem("RoomName",room)
  window.location="chatpage.html"
  }