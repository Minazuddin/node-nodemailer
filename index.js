const nodemailer = require("nodemailer");
const config = require("./config");

// create transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: config.email.user,
    // pass: config.email.pass,
    clientId: config.email.clientId,
    clientSecret: config.email.clientSecret,
    accessToken: config.email.accessToken,
    refreshToken: config.email.refreshToken,
    accessUrl: config.email.accessUrl,
  },
});

// create mailOptions
const mailOptions = {
  // from: "tom469114@gmail.com",
  from: "minazuddin23@gmail.com",
  to: "tom469114@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

// transporter.verify((error, success) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('server is ready to receive emails', success);
//   }
// })

// send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
})