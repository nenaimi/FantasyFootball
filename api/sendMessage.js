
/* -----------------------Important--------------------------
  -wont work unless you have twilio account and key
  -message me and ill send it to you!
  -limited on the amount of free uses we have left so im disabling it for now
*/
const client = require("twilio")(
  '',// account
  '' // key
);


export default async (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    
    client.messages.create({
      from: "+19705388250",
      to: req.body.to,
      body: req.body.body,
    })
    .then(() => {
      console.log("success");
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  };  

