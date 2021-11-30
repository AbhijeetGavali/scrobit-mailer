"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

async function mailer(props) {
  // destructuring for usage
  const { MAIL_TO, MAILER_SUBJECT, MAILER_TEMPLATE } = props;

  // Transformer for outlook
  let transporter = nodemailer.createTransport({
    host: process.env.NODE_MAILER_AUTH_HOST,
    port: process.env.NODE_MAILER_AUTH_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODE_MAILER_AUTH_USER,
      pass: process.env.NODE_MAILER_AUTH_PASSWORD,
    },
  });

  // Transformer for google
  // const transporter = nodemailer.createTransport({
  //   service: process.env.NODE_MAILER_AUTH_HOST,
  //   auth: {
  //     user: process.env.NODE_MAILER_AUTH_USER,
  //     pass: process.env.NODE_MAILER_AUTH_PASSWORD,
  //   },
  // });

  // set all required contents to send via mail
  const mailOptions = {
    from: "mr.abhijeetgavali@gmail.com",
    to: MAIL_TO,
    subject: MAILER_SUBJECT,
    html: MAILER_TEMPLATE,
  };

  // send mail with defined mail opetions / parameters
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.messageId);
    }
  });
}
module.exports = mailer;
