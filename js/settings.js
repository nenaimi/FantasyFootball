var teams = {
  detroitLions: [
    "Matt Stafford",
    "D'Andre Swift",
    "Adrian Peterson",
    "Danny Amendola",
    "Adrian Peterson",
    "Marvin Jones",
    "T.J. Hockenson",
    "Kenny Golladay",
  ],
  arizonaCardinals: [
    "Kyle Murray",
    "Kenyan Drake",
    "Larry Fitzgerald Jr.",
    "Chase Edmonds",
    "DeAndre Hopkins",
    "Christian Kirk",
    "Dan Arnold",
  ],
  dallasCowboys: [
    "Dak Prescott",
    "Garrett Gilbert",
    "Tony Pollard",
    "Rico Dowdle",
    "Amari Cooper",
    "CeeDee Lamb",
    "Michael Gallup",
    "Dalton Schultz",
  ],
  philadelphiaEagles: [
    "Jalen Hurts",
    "Carson Wentz",
    "Miles Sanders",
    "Boston Scott",
    "Travis Fulgham",
    "Greg Ward",
    "Richard Rodgers",
    "Dallas Goedert",
  ],
  seattleSeahawks: [
    "Russell Wilson",
    "Chris Carson",
    "Alex Collins",
    "D.K. Metcalf",
    "Tyler Lockett",
    "David Moore",
    "Greg Olsen",
  ],
  sanFranciso: [
    "Nick Mullens",
    "Jimmy Garoppolo",
    "Kyle Juszczyk",
    "JaMycal Hasty",
    "Brandon Aiyuk",
    "George Kittle",
    "Kendrick Bourne",
    "Deebo Samuel",
  ],
  greenBayPackers: [
    "Aaron Rodgers",
    "Tim Boyle",
    "Aaron Jones",
    "Jamaal Williams",
    "Davante Adams",
    "Robert Tonyan",
    "Marquez Valdes-Scantling",
    "Allen Lazard",
  ],
  baltimoreRavens: [
    "Lamar Jackson",
    "Trace McSorley",
    "Gus Edwards",
    "J.K. Dobbins",
    "Mark Andrews",
    "Marquise Brown",
    "Willie Snead",
    "Miles Boykin",
  ],
  newYorkGiants: [
    "Daniel Jones",
    "Colt McCoy",
    "Wayne Gallman",
    "Alfred Morris",
    "Darius Slayton",
    "Evan Engram",
    "Sterling Shepard",
    "Golden Tate",
  ]

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

function displayDropdown() {
  let phoneCheckbox = document.getElementById("phoneCheckbox");
  let emailCheckbox = document.getElementById("emailCheckbox");
  let dropdown = document.getElementById("dropdown");

  if (phoneCheckbox.checked == true || emailCheckbox.checked == true) {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function submit() {
  let selectedTeam = $("#TeamNames option:selected").text();
  let selectedPlayer = $("#PlayerNames option:selected").text();
  console.log(selectedTeam + selectedPlayer);
  let phoneCheckbox = document.getElementById("phoneCheckbox");
  let emailCheckbox = document.getElementById("emailCheckbox");
  if (phoneCheckbox.checked) {
    let phoneNumber = document.getElementById("phoneNumber");
    if(phoneNumber.value === ""){
      alert("Please provide a phonenumber");
      return;
    }
    enrollNumber();
  }
  if (emailCheckbox.checked) {
    let emailInput = document.getElementById("email");
    if(emailInput.value === ""){
      alert("Please provide an email");
      return;
    }
    enrollEmail();
  }
}

function enrollNumber() {
  var number = document.getElementById("phoneNumber").value;
  number = "+1" + number;
  player = $("#PlayerNames option:selected").text();
  team = $("#TeamNames option:selected").text();
  category = $("#Category option:selected").text();
  message = player + " from the " + team;
  const res = fetch("../api/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      to: number,
      body:
      "You have successfully registered to receieve updates about " + message + " for " + category + " events.",
    }),
  });

  var successMsg = document.getElementById("successMsg");
  successMsg.style.display = "block";
}

//todo
function enrollEmail() {
  var email = document.getElementById("email").value;
  player = $("#PlayerNames option:selected").text();
  team = $("#TeamNames option:selected").text();
  category = $("#Category option:selected").text();
  message = player + " from the " + team;
  const res = fetch("../api/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: email,
      body:
        "You have successfully registered to receieve updates about " + message + " for " + category + " events.",
    }),
  });
  var successMsg = document.getElementById("successMsg");
  successMsg.style.display = "block";
}
