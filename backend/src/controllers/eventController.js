import Event from "../models/Event.js";

export async function listEvents(req, res, next) {
  try {
    const data = await Event.find({ published: true, startDate: { $gte: new Date(Date.now() - 86400000) } })
      .sort({ startDate: 1 });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function createEvent(req, res, next) {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    next(err);
  }
}
