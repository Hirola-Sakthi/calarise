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

app.post("/contact", (req, res) => {
  res.status(200).json({ message: "Message received" });
  sendEmail(req.body).catch((error) => {
    console.error("Mail error:", error);
  });
});

const sendFaqMail = require("./faqEmail");

app.post("/faq-email", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question || !question.trim()) {
      return res.status(400).json({ message: "Question is required" });
    }
    await sendFaqMail({
      question: question.trim(),
    });
    return res.status(200).json({
      message: "Thanks! Your question has been received.",
    });
  } catch (error) {
    console.error("FAQ Email Error:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
