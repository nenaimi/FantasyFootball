console.log('signup page good');
var firebaseConfig = {
    apiKey: "AIzaSyA4qsMPbsZ3UDWe40ChANY_OCmJXT5vXww",
    authDomain: "fantasy-sports-4791a.firebaseapp.com",
    databaseURL: "https://fantasy-sports-4791a.firebaseio.com",
    projectId: "fantasy-sports-4791a",
    storageBucket: "fantasy-sports-4791a.appspot.com",
    messagingSenderId: "1085483728015",
    appId: "1:1085483728015:web:ec695dd68ff1fbdc9404fa",
    measurementId: "G-G6SJM9BZ1N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





function signup(){

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;



firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    window.location.href = "../pages"   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}
