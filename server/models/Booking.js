import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  checkIn: Date,
  checkOut: Date,
  rooms: Number,
  adults: Number,
  guideRequired: String,
  days: Number,
  total: Number,
  receipt: String,
});

export default mongoose.model("Booking", bookingSchema);
