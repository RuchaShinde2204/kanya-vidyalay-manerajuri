import express from "express";
import { deleteGalleryImage, getGalleryImages, uploadGalleryImage } from "../controllers/galleryController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { upload, uploadToCloudinary } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getGalleryImages);
router.post("/", protect, authorize("admin"), upload.single("image"), uploadToCloudinary, uploadGalleryImage);
router.delete("/:id", protect, authorize("admin"), deleteGalleryImage);

export default router;
