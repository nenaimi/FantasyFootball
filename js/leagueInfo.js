//generate random string that allows for friends to join league
//todo: will need to be stored with the team name in the DB

function generateLeagueID() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var length = 5;
    var leagueID = document.getElementById("leagueID");
    var btnGenerateID = document.getElementById("btnGenerateID");

    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    leagueID.innerHTML = result;
    leagueID.style = "visible";

    //Optional?
    //can only generate code once
    //todo: store league invite code in DB
    //btnGenerateID.onclick = null;

    console.log(result);
    return result;
 }

 

