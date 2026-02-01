const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({ firstName, lastName, email, phone, message }) => {
  await Promise.all([
    resend.emails.send({
      from: "Calaris <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Lead",
      html: `
        <h3>New Lead</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }),

    resend.emails.send({
      from: "Calaris <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting The Calaris Interiors",
      html: `
        Hi ${firstName} ${lastName},<br/><br/>
        Thank you for reaching out to The Calaris Interiors.<br/>
        We have received your message and will get back to you shortly.<br/><br/>
        Best Regards,<br/>
        The Calaris Interiors Team
      `,
    }),
  ]);
};

module.exports = sendMail;
