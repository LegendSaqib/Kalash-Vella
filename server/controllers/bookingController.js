import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking({
      ...req.body,
      receipt: req.file ? req.file.filename : null,
    });
    await booking.save();
    res.status(201).json({ message: "Booking saved", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
