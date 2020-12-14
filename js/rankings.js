window.onload = function () {
  var dropdown = document.getElementById("dropdown");
  var noLeague = document.getElementById("noLeague");

  let leagueName = window.name;
    if (leagueName === "UMDSDII") {
       dropdown.style.display = "block";
       noLeague.style.display = "none";
    }
    else{
        dropdown.style.display = "none";
        noLeague.style.display = "block";
    }
  
};

var show = false;
function expandLeague(){
    var rankings = document.getElementById("rankings");
    if(show === false ){
    console.log("Test");
    rankings.style.display = "block";
    }
    else{
        rankings.style.display = "none";
    }
    show = !show;
}