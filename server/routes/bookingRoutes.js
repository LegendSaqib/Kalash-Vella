import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();
const router = express.Router();

// multer config
const storage = multer.memoryStorage(); // memory storage for direct email attachment
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  const { fullName, email, phone, checkIn, checkOut, rooms, adults, days, guideRequired, total } = req.body;
  const imageFile = req.file;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "pharan.kalash@gmail.com",
    replyTo: email,
    subject: `New Booking from ${fullName}`,
    text: `
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      CheckIn: ${checkIn}
      CheckOut: ${checkOut}
      Rooms: ${rooms}
      Adults: ${adults}
      Days: ${days}
      Guide: ${guideRequired}
      Total: ${total}
    `,
    attachments: imageFile
      ? [
          {
            filename: imageFile.originalname,
            content: imageFile.buffer,
          },
        ]
      : [],
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
