const firebaseConfig = {
    apiKey: "AIzaSyA0M5sAbuflm69lLYl3PtbHbmxkb9ql9hE",
    authDomain: "kwitter-4aca3.firebaseapp.com",
    databaseURL: "https://kwitter-4aca3-default-rtdb.firebaseio.com",
    projectId: "kwitter-4aca3",
    storageBucket: "kwitter-4aca3.appspot.com",
    messagingSenderId: "686006766274",
    appId: "1:686006766274:web:b94f2d838334c7fbfe895b"
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
console.log("Room names - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclik= 'redirectToRoomName(this.id) '>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    
    });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location = "index.html";
}

