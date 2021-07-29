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

var Rn=""
function srn(){
Rn= document.getElementById("name").value
firebase.database().ref("/").child(Rn).update({purpose:"testing"})
localStorage.setItem("RoomName",Rn)
}
