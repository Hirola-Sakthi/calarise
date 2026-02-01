const nodemailer = require("nodemailer");

const sendFaqMail = async ({ question }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
    family: 4,
  });

  await transporter.sendMail({
    from: `"FAQ Question" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: "New FAQ Question from Website",
    html: `
      <h3>New FAQ Question</h3>
      <p><strong>Question:</strong></p>
      <p>${question}</p>
    `,
  });
};

module.exports = sendFaqMail;
