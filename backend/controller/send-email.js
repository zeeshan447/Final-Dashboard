var nodemailer = require("nodemailer");

const sendemail = async (req, res) => {
  try {
    const candidate_name = req.body.candidate_name;
    const to = req.body.to;
    const cc = req.body.cc;
    const subject = req.body.subject;
    const text = req.body.text;
    const mailOptions = {
      from: process.env.UserEmail,
      to: to,
      subject: subject,
      cc: cc,
      html: `<p>Dear ${candidate_name},</p><br><b>${text}</b><br><br><p>Thanks</p>`,
    };

    console.log("mailOptions :>> ", mailOptions);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      //   host: "smtp.office365.com",
      //host: "smtp-mail.outlook.com", // hostname
      //service: "outlook", // service name
      secureConnection: false,
      auth: {
        user: process.env.UserEmail,
        pass: process.env.Password,
      },
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.json({ statuscode: 500, message: "Error in sending email." });
      } else {
        console.log("Email send" + info.response);
        res.json({ statuscode: 200, message: "Email Send Successfully" });
      }
    });
  } catch (error) {
    console.log(error);
    res.json({ statuscode: 300, message: error.message });
  }
};

module.exports = {
  sendemail,
};
// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "jamil.visionx1122@gmail.com",
//     pass: "VisionX123",
//   },
// });

// var mailOptions = {
//   from: "jamil.visionx1122@gmail.com",
//   to: "jamilurehman3274@gmail.com",
//   subject: "info",
//   text: `my first mail`,
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
