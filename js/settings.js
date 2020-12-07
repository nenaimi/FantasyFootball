

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
