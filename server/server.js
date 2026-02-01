const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is running");
});


const sendEmail = require("./email");

app.post("/contact", async (req, res) => {
  try {
    await sendEmail(req.body);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});


const sendFaqMail = require("./faqEmail");

 app.post("/faq-email", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ message: "Question is required" });
    }
    await sendFaqMail({ question });
    res.status(200).json({ message: "FAQ email sent successfully" });
  } catch (error) {
    console.error("FAQ Mail error:", error);
    res.status(500).json({ message: "Failed to send FAQ email" });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
