import mongoose from "mongoose";

const venueEnquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  eventType: {
    type: String,
    enum: ["Wedding", "Corporate Event", "Private Function", "Golf Outing", "Other"],
    required: true
  },
  preferredDate: { type: Date, required: true },
  guestCount: { type: Number, required: true, min: 1 },
  preferredVenue: {
    type: String,
    enum: ["Lakes Course", "Ranch Course", "Either/Both"],
    required: true
  },
  notes: { type: String, default: "" },
  referralSource: { type: String, default: "" },
  status: { type: String, enum: ["new", "contacted", "closed"], default: "new" }
}, { timestamps: true });

export default mongoose.model("VenueEnquiry", venueEnquirySchema);
