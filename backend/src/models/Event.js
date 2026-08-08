import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String, default: "" },
  featuredImage: { type: String, default: "" },
  rsvpUrl: { type: String, default: "" },
  category: { type: String, default: "Club Event" },
  published: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
