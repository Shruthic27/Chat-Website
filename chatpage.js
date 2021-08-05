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
  room_name=localStorage.getItem("RoomName")
  user_name=localStorage.getItem("Name")

       firebase_message_id = childKey;
       message_data = childData;
   //Start code
   
   //End code
  
 
  function send(){
    s=document.getElementById("Send").value
    firebase.database().ref("/"+room_name).push({
          name:user_name,
          message:s,
          like:0
    })
    document.getElementById("Send").value=""
}

  function logout(){
    localStorage.removeItem("RoomName")
    localStorage.removeItem("Name")
    window.location="index.html"
}