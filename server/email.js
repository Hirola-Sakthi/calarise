const nodemailer = require("nodemailer");

const sendMail = async ({ firstName, lastName, email, phone, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
    family: 4
  });

  await transporter.sendMail({
    from: `"Contact Form" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: "New Contact Lead",
    html: `
      <h3>New Lead</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });


await transporter.sendMail({
  from: `"The Calaris Interiors" <${process.env.EMAIL}>`,
  to: email,
  subject: "Thank you for contacting The Calaris Interiors",
  html: `
    Hi ${firstName} ${lastName},<br/><br/>
    
    Thank you for reaching out to The Calaris Interiors!<br/><br/>
    
    We have received your message and will get back to you shortly.<br/><br/>
    
    Best Regards,<br/>
    The Calaris Interiors Team
  `,
});


};

module.exports = sendMail;
