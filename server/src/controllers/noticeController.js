import Notice from "../models/Notice.js";

export const getNotices = async (req, res, next) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    next(error);
  }
};

export const createNotice = async (req, res, next) => {
  try {
    const notice = await Notice.create(req.body);
    res.status(201).json(notice);
  } catch (error) {
    next(error);
  }
};

export const updateNotice = async (req, res, next) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!notice) {
      res.status(404);
      return next(new Error("Notice not found."));
    }
    res.json(notice);
  } catch (error) {
    next(error);
  }
};

export const deleteNotice = async (req, res, next) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) {
      res.status(404);
      return next(new Error("Notice not found."));
    }
    res.json({ message: "Notice deleted." });
  } catch (error) {
    next(error);
  }
};
