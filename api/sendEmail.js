
export default async (req, res) => {
  const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  ""
);
  var message = "<strong>" + req.body.body + "</strong>";
  const msg = {
    to: req.body.to, // Change to your recipient
    from: "fantasysportsd2@gmail.com", // Change to your verified sender
    subject: "Changes to Notifications",
    text: message,
    html: message,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  }