import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }
});

export const uploadToCloudinary = async (req, res, next) => {
  if (!req.file) return next();

  try {
    const dataUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "kanya-vidyalay-manerajuri",
      resource_type: "auto"
    });

    console.log("Uploaded file:", {
  secure_url: result.secure_url,
  resource_type: result.resource_type,
  format: result.format,
  public_id: result.public_id
});

    req.fileUrl = result.secure_url;
    next();
  } catch (error) {
    next(error);
  }
};
