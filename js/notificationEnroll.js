var phoneNumber = document.getElementById("phoneNumber");


/*
----------TODO------------
1. Check first if current user is already registered
    a. Check if user has phonenumber - Query the DB
        - if they have a phone number they have registered
        - if they dont, they are not registered
2. If user isnt registered
    a. update number into database
*/
function enrollNumber(){
    console.log("clicked");
    var number = document.getElementById("phoneNumber").value;

    const res = fetch("../api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //Just joking
        body: JSON.stringify({ to: number, body: "You have successfully registered to receieve updates!" }),
      });


}

