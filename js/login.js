  console.log("hi");
  
  // Your web app's Firebase configuration
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





  firebase.auth().onAuthStateChanged(function(user){
      
      if(user){
          // Successful signin
        window.location.href = "../index.html"   
      }

      // Handle bad signin
      else{

      }
  });

  function login(){
  
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    console.log(userEmail + " " + userPass);
  
    if(userEmail != "" && userPass != ""){
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
    
        // ...
        });
    }


  }

  function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
  }

  

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });