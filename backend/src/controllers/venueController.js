import VenueEnquiry from "../models/VenueEnquiry.js";

export async function createVenueEnquiry(req, res, next) {
  try {
    const required = ["fullName", "email", "phone", "eventType", "preferredDate", "guestCount", "preferredVenue"];
    const missing = required.filter(k => req.body[k] === undefined || req.body[k] === "");
    if (missing.length) {
      return res.status(400).json({ message: `Missing required fields: ${missing.join(", ")}` });
    }

    const enquiry = await VenueEnquiry.create(req.body);

    // Production integration point:
    // send notification to nominated club mailbox and confirmation to the enquirer.
    return res.status(201).json({
      message: "Venue enquiry created",
      enquiryId: enquiry._id
    });
  } catch (err) {
    next(err);
  }
}

export async function listVenueEnquiries(req, res, next) {
  try {
    const data = await VenueEnquiry.find().sort({ createdAt: -1 }).limit(100);
    res.json(data);
  } catch (err) {
    next(err);
  }
}
