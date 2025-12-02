import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js"
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// 🔥 CORS sabse upar hona chahiye
app.use(cors());

// 🔥 JSON body parser
app.use(express.json());

app.use(express.urlencoded({extended: true}));

// 🔥 Contact route
app.use("/api/contact", contactRoutes);
app.use("/api/booking", bookingRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
