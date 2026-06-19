import Gallery from "../models/Gallery.js";

export const getGalleryImages = async (req, res, next) => {
  try {
    const query = req.query.category ? { category: req.query.category } : {};
    const images = await Gallery.find(query).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    next(error);
  }
};

export const uploadGalleryImage = async (req, res, next) => {
  try {
    if (!req.fileUrl) {
      res.status(400);
      return next(new Error("Image file is required."));
    }

    const image = await Gallery.create({
      imageUrl: req.fileUrl,
      category: req.body.category || "Campus"
    });
    res.status(201).json(image);
  } catch (error) {
    next(error);
  }
};

export const deleteGalleryImage = async (req, res, next) => {
  try {
    const image = await Gallery.findByIdAndDelete(req.params.id);
    if (!image) {
      res.status(404);
      return next(new Error("Gallery image not found."));
    }
    res.json({ message: "Gallery image deleted." });
  } catch (error) {
    next(error);
  }
};
