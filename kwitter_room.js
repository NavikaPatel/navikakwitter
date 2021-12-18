var firebaseConfig = {
      apiKey: "AIzaSyAFkv07TC-dwi2a2utOWl-m2AU_HNt-ais",
      authDomain: "navika-practice.firebaseapp.com",
      databaseURL: "https://navika-practice-default-rtdb.firebaseio.com",
      projectId: "navika-practice",
      storageBucket: "navika-practice.appspot.com",
      messagingSenderId: "369814514272",
      appId: "1:369814514272:web:c541e09bed12f5a8acf105"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+ user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectroomname(name){

      console.log(name);
      localStorage.setItem("room_name",name);

      window.location="kwitter_room.html";
}
