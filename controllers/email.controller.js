const { response } = require("express");
const nodemailer = require("nodemailer");

const crearTransportador = () => {
  const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    // auth: {
    //   user: "Fagitex2021@gmail.com",
    //   pass: "shrbhvsevuwtnrbr",
    // },

    // host: "smtp.mailtrap.io",
    // port: 2525,
    // auth: {
    //   user: "346ce2a7c4012f",
    //   pass: "13ba75a47b7149",
    // }

    // host: "smtp.gmail.com",
    // port: 587,
    // secure: true,
    // auth: {
    //   user: "Fagitex2021@gmail.com",
    //   pass: "shrbhvsevuwtnrbr",
    // },

    service: "hotmail", // no need to set host or port etc.

    auth: {
      user: process.env.USERHOTMAIL,
      pass: process.env.PASSHOTMAIL,
    },
  });

  return transporter;
};

const enviarCorreo = async (req, res = response) => {
  let user = req.body;
  const { name, email, message, subject } = user;

  // console.log(email);
  const transporter = crearTransportador();

  // let mailOptions = {
  //   from: "remitente",
  //   to: "Fagitex2021@gmail.com",
  //   subject: subject,
  //   text: message,
  //   html: `<p>${message}</p>`,

  // };

  var mailOptions = {
    from: `${email}`,
    to: "Fagitex2021@gmail.com",
    subject: `DE: ${email}-${subject}`,
    html: `<p>Me llamo ${name},${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      // console.log("Email enviado.");
      res.status(200).jsonp(req.body);
    }
  });

  // res.json({
  //   ok: true,
  //   accepted: info.accepted,
  //   resp: info.response,
  //   mensaje: info.messageId,
  // });
};

module.exports = {
  enviarCorreo,
};
