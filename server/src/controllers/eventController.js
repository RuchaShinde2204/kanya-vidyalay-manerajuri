import Event from "../models/Event.js";

export const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (error) {
    next(error);
  }
};

export const getUpcomingEvents = async (req, res, next) => {
  try {
    const events = await Event.find({ date: { $gte: new Date() } }).sort({ date: 1 }).limit(6);
    res.json(events);
  } catch (error) {
    next(error);
  }
};

export const getPastEvents = async (req, res, next) => {
  try {
    const events = await Event.find({ date: { $lt: new Date() } }).sort({ date: -1 });
    res.json(events);
  } catch (error) {
    next(error);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const event = await Event.create({ ...req.body, imageUrl: req.fileUrl || "" });
    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    if (req.fileUrl) payload.imageUrl = req.fileUrl;

    const event = await Event.findByIdAndUpdate(req.params.id, payload, { new: true, runValidators: true });
    if (!event) {
      res.status(404);
      return next(new Error("Event not found."));
    }
    res.json(event);
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      res.status(404);
      return next(new Error("Event not found."));
    }
    res.json({ message: "Event deleted." });
  } catch (error) {
    next(error);
  }
};
