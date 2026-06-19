import express from "express";
import { body } from "express-validator";
import { createNotice, deleteNotice, getNotices, updateNotice } from "../controllers/noticeController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

const noticeValidation = [
  body("title").notEmpty().withMessage("Notice title is required."),
  body("description").notEmpty().withMessage("Notice description is required.")
];

router.get("/", getNotices);
router.post("/", protect, authorize("admin"), noticeValidation, validateRequest, createNotice);
router.put("/:id", protect, authorize("admin"), noticeValidation, validateRequest, updateNotice);
router.delete("/:id", protect, authorize("admin"), deleteNotice);

export default router;
