function displayMsg(){
    var msg = document.getElementById("successMsg");
    let leagueCode = document.getElementById("leagueCode").value;
    let successJoin = document.getElementById("successJoin");


    if(leagueCode == "UMDSDII"){
        msg.innerHTML = "Succesfully joined UMD Senior Design League!";
        successJoin.style.display = "block";
        window.name = "UMDSDII";
        console.log(window.name);

    }
    else{
        msg.innerHTML = "Invalid League Code";
    }
  }
