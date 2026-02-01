const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendFaqMail = async ({ question, userEmail, userName }) => {
  await Promise.all([
    resend.emails.send({
      from: "Calaris <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: "New FAQ Question from Website",
      html: `
        <h3>New FAQ Question</h3>
        <p><strong>Name:</strong> ${userName || "Anonymous"}</p>
        <p><strong>Email:</strong> ${userEmail || "Not provided"}</p>
        <p><strong>Question:</strong></p>
        <p>${question}</p>
      `,
    }),

    userEmail && resend.emails.send({
      from: "Calaris <onboarding@resend.dev>",
      to: userEmail,
      subject: "Thank you for submitting your question",
      html: `
        Hi ${userName || "there"},<br/><br/>
        Thank you for submitting your question!<br/>
        We have received it and will get back to you shortly.<br/><br/>
        Best Regards,<br/>
        The Calaris Interiors Team
      `,
    }),
  ]);
};

module.exports = sendFaqMail;
