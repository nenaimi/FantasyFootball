var teams = {
  detroitLions: [
    "Matthew Stafford",
    "D'Andre Swift",
    "Adrian Peterson",
    "Danny Amendola",
    "Marvin Jones",
    "T.J. Hockenson",
    "Kenny Golladay",
  ],
  tampaBayBuccaneers: [
    "Rob Gronkowski",
    "Tom Brady",
    "LeSean McCoy",
    "Antonio Brown",
    "Mike Evans",
    "Leonard Fournette",
  ],
  dallasCowboys: [
    "Andy Dalton",
    "Ezekiel Elliott",
    "Tony Pollard",
    "Rico Dowdle",
    "Amari Cooper",
    "CeeDee Lamb",
    "Michael Gallup",
  ],
  seattleSeahawks: [
    "Russell Wilson",
    "Chris Carson",
    "Tyler Lockett",
    "Will Dissly",
    "D.K. Metcalf",
    "Nick Bellore",
    "Carlos Hyde",
    "Josh Gordon",
  ],
};
$(document).ready(function () {
  $("#TeamNames")
    .on("change", function () {
      $("#PlayerNames").html(
        teams[$(this).val()].reduce(function (p, c) {
          return p.concat('<option value="' + c + '">' + c + "</option>");
        }, "")
      );
    })
    .trigger("change");
});
var count = 0;
function addPlayer() {
  if (count < 8) {
    var newPlayer = document.createElement("img");
    var newPlayerParent = document.getElementById("players");
    var player = document.getElementById("PlayerNames");
    if (player.value.length != 0) {
      newPlayer.id = "id";
      newPlayer.className = "class";
      newPlayer.style = "border-radius:50px";
      let playerName = player.value.split(" ").join("");
      let imageLocation = "../images/" + playerName + ".png";
      newPlayer.src = imageLocation;
      newPlayerParent.appendChild(newPlayer);
      player.remove(player.selectedIndex);
      count++;
    }
  }
  if(count === 8){
    var successMsg = document.getElementById("successMsg");
    successMsg.style.display = "block";
  }
}
