import Contact from "../models/Contact.js";

export const createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.status(404);
      return next(new Error("Contact message not found."));
    }
    res.json({ message: "Contact message deleted." });
  } catch (error) {
    next(error);
  }
};
