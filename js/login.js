// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA4qsMPbsZ3UDWe40ChANY_OCmJXT5vXww",
  authDomain: "fantasy-sports-4791a.firebaseapp.com",
  databaseURL: "https://fantasy-sports-4791a.firebaseio.com",
  projectId: "fantasy-sports-4791a",
  storageBucket: "fantasy-sports-4791a.appspot.com",
  messagingSenderId: "1085483728015",
  appId: "1:1085483728015:web:ec695dd68ff1fbdc9404fa",
  measurementId: "G-G6SJM9BZ1N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var invalid = document.getElementById("invalid");
  
  console.log(email + " " + password);

  if (email != "" && password != "") {
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    invalid.style.display = "none";
    window.location.href = "../pages"   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    invalid.style.display = "block";
  });
  }
  
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
    })
    .catch(function (error) {
    });
}

firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function () {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
