function displayMsg(){
    let msg = document.getElementById("successMsg");
    let button = document.getElementById("joinLeagueButton");
  
    if (msg.style.display === 'block') {
        msg.style.display = 'none';
    } else {
        msg.style.display = 'block';
    }
  }