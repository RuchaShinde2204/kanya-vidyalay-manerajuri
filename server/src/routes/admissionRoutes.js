import express from "express";
import { body } from "express-validator";
import { createAdmission, deleteAdmission, getAdmissions } from "../controllers/admissionController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { upload, uploadToCloudinary } from "../middleware/uploadMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { updateAdmissionStatus } from "../controllers/admissionController.js";
//import {createAdmission,deleteAdmission,getAdmissions,updateAdmissionStatus} from "../controllers/admissionController.js";

const router = express.Router();

const admissionValidation = [
  body("studentName").notEmpty().withMessage("Student name is required."),
  body("dob").isISO8601().withMessage("Valid date of birth is required."),
  body("gender").notEmpty().withMessage("Gender is required."),
  body("address").notEmpty().withMessage("Address is required."),
  body("parentName").notEmpty().withMessage("Parent name is required."),
  body("contactNumber").notEmpty().withMessage("Contact number is required."),
  body("gradeApplyingFor").notEmpty().withMessage("Grade applying for is required.")
];

router.post("/", upload.single("document"), admissionValidation, validateRequest, uploadToCloudinary, createAdmission);
router.get("/", protect, authorize("admin"), getAdmissions);
router.delete("/:id", protect, authorize("admin"), deleteAdmission);
router.patch(
  "/:id/status",
  protect,
  authorize("admin"),
  updateAdmissionStatus
);
export default router;
