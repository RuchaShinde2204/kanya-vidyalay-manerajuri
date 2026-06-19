import express from "express";
import { body } from "express-validator";
import {
  createEvent,
  deleteEvent,
  getEvents,
  getPastEvents,
  getUpcomingEvents,
  updateEvent
} from "../controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { upload, uploadToCloudinary } from "../middleware/uploadMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

const eventValidation = [
  body("title").notEmpty().withMessage("Event title is required."),
  body("description").notEmpty().withMessage("Event description is required."),
  body("date").isISO8601().withMessage("Valid event date is required."),
  body("location").notEmpty().withMessage("Event location is required.")
];

router.get("/", getEvents);
router.get("/upcoming", getUpcomingEvents);
router.get("/past", getPastEvents);
router.post("/", protect, authorize("admin"), upload.single("image"), eventValidation, validateRequest, uploadToCloudinary, createEvent);
router.put("/:id", protect, authorize("admin"), upload.single("image"), eventValidation, validateRequest, uploadToCloudinary, updateEvent);
router.delete("/:id", protect, authorize("admin"), deleteEvent);

export default router;
