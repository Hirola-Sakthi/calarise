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

app.post("/faq-email", (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ message: "Question is required" });
  }
  res.status(200).json({ message: "Question received" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
