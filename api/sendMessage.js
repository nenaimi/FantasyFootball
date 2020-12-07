const client = require("twilio")(
    'AC470dbd23e5513d87594e77557898f681',
    '5c8acbb7ca618881d94f03f098f30584'
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