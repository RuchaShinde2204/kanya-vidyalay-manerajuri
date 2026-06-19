import express from "express";
import { body } from "express-validator";
import { createContact, deleteContact, getContacts } from "../controllers/contactController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("Valid email is required."),
    body("message").notEmpty().withMessage("Message is required.")
  ],
  validateRequest,
  createContact
);
router.get("/", protect, authorize("admin"), getContacts);
router.delete("/:id", protect, authorize("admin"), deleteContact);

export default router;
