Name=""
function login(){
  Name=document.getElementById("name").value
  localStorage.setItem("Name", Name)
  window.location="Chatroom.html"
}