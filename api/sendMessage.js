const client = require("twilio")(
    'AC470dbd23e5513d87594e77557898f681',
    '38ed964705bea7fb2dae6684b61e0baa'
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
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  };  