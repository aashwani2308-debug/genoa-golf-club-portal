import "dotenv/config";
import mongoose from "mongoose";
import Event from "../src/models/Event.js";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/genoa_golf_club";
await mongoose.connect(uri);

await Event.deleteMany({});
await Event.insertMany([
  {
    title: "Summer Golf & Dinner Night",
    startDate: new Date(Date.now() + 7 * 86400000),
    description: "Demo seeded event for functional testing.",
    category: "Dining",
    rsvpUrl: "https://example.com/rsvp"
  },
  {
    title: "Weekend Club Tournament",
    startDate: new Date(Date.now() + 14 * 86400000),
    description: "Demo seeded tournament for calendar testing.",
    category: "Tournament",
    rsvpUrl: "https://example.com/tournament"
  }
]);

console.log("Seed complete");
await mongoose.disconnect();
