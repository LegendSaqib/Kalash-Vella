import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
console.log("request bodt", req.body)
  const transporter = nodemailer.createTransport({
    // host: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  // console.log("this ", transporter.);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "backendapitester@gmail.com",
    replyTo: email,
    subject: `New Contact Message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email." });
  }
});

export default router;