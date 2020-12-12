
var teams={
  detroitLions:['Matt Stafford', 'Marvin Jones', 'Danny Amendola', 'Desmond Trufant'],
  arizonaCardinals:['Kyle Murray', 'DeAndre Hopkins', 'Larry Fitzgerald Jr.', 'Patrick Peterson'],
  dallasCowboys:['Dak Prescott', 'CeeDee Lamb', 'Exekiel Elliott','Aldon Smith']
}


$(document).ready(function () {
  $('#TeamNames').on('change', function() {
      $('#PlayerNames').html(
      teams[$(this).val()].reduce(function(p, c) {
          return p.concat('<option value="' + c + '">' + c + '</option>');
      }, '')
      );
  }).trigger('change');
});

function displayDropdown(){
  let phoneCheckbox = document.getElementById("phoneCheckbox");
  let emailCheckbox = document.getElementById("emailCheckbox");
  let dropdown = document.getElementById("dropdown");

  if (phoneCheckbox.checked == true || emailCheckbox.checked == true){
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function submit(){
  let selectedTeam = $("#TeamNames option:selected").text();
  let selectedPlayer = $("#PlayerNames option:selected").text();
  console.log(selectedTeam + selectedPlayer)
  let phoneCheckbox = document.getElementById("phoneCheckbox");
  if(phoneCheckbox.checked){
    enrollNumber();
  }
}

function enrollNumber(){
  var number = document.getElementById("phoneNumber").value;
  number = "+1" + number;
  player = $("#PlayerNames option:selected").text();
  team = $("#TeamNames option:selected").text();
  message = player + " from the " + team;
  console.log("clicked!")
  console.log(message);
  console.log(number);
  const res = fetch("../api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
   
      body: JSON.stringify({ to: number, body: "You have successfully registered to receieve updates about " + message}),
    });
}
