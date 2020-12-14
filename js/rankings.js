window.onload = function () {
  var dropdown = document.getElementById("dropdown");
  var noLeague = document.getElementById("noLeague");

  let leagueName = window.name;
  if (leagueName === "UMDSDII") {
    dropdown.style.display = "block";
    noLeague.style.display = "none";
  } else {
    dropdown.style.display = "none";
    noLeague.style.display = "block";
  }

  var nickTeam = document.getElementById("nickTeam");
  nickTeam.addEventListener("click", function () {
    var nickPlayers = document.getElementById("nickPlayers");
    console.log(nickPlayers.style.display);
    if (nickPlayers.style.display == "none") {
        nickPlayers.style.display = "block";
    }
    else{
        
        nickPlayers.style.display = "none";
    }
  });

  var nickTeam = document.getElementById("nurraTeam");
  nickTeam.addEventListener("click", function () {
    var nickPlayers = document.getElementById("nickPlayers");
    console.log(nickPlayers.style.display);
    if (nickPlayers.style.display == "none") {
        nickPlayers.style.display = "block";
    }
    else{
        
        nickPlayers.style.display = "none";
    }
  });

  var nickTeam = document.getElementById("nurraTeam");
  nickTeam.addEventListener("click", function () {
    var nickPlayers = document.getElementById("nickPlayers");
    if (nickPlayers.style.display == "none") {
        nickPlayers.style.display = "block";
    }
    else{
        
        nickPlayers.style.display = "none";
    }
  });

  var nurraTeam = document.getElementById("nurraTeam");
  nurraTeam.addEventListener("click", function () {
    var nurraPlayers = document.getElementById("nurraPlayers");
    if (nurraPlayers.style.display == "none") {
        nurraPlayers.style.display = "block";
    }
    else{
        nurraPlayers.style.display = "none";
    }
  });

  var andrewTeam = document.getElementById("andrewTeam");
  andrewTeam.addEventListener("click", function () {
    var andrewPlayers = document.getElementById("andrewPlayers");
    if (andrewPlayers.style.display == "none") {
        andrewPlayers.style.display = "block";
    }
    else{
        
        andrewPlayers.style.display = "none";
    }
  });

  var shishirTeam = document.getElementById("shishirTeam");
  shishirTeam.addEventListener("click", function () {
    var shishirPlayers = document.getElementById("shishirPlayers");
    if (shishirPlayers.style.display == "none") {
        shishirPlayers.style.display = "block";
    }
    else{
        
        shishirPlayers.style.display = "none";
    }
  });
};

var show = false;
function expandLeague() {
  var rankings = document.getElementById("rankings");
  if (show === false) {
    console.log("Test");
    rankings.style.display = "block";
  } else {
    rankings.style.display = "none";
  }
  show = !show;
}
