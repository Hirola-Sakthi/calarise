const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendFaqMail = async ({ question}) => {
  await Promise.all([
    resend.emails.send({
      from: "The Calaris <support@thecalaris.com>",
      to: process.env.ADMIN_EMAIL,
      subject: "New FAQ Question from Website",
      html: `
      <p>Hello Team,</p>
      <p>A new FAQ question has been submitted from the website.</p>
      <p><strong>Question:</strong></p>
      <p>${question}</p>
      `,
    }),
  ]);
};

module.exports = sendFaqMail;
