import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true, enum: ["Female", "Male", "Other"] },
    address: { type: String, required: true, trim: true },
    parentName: { type: String, required: true, trim: true },
    contactNumber: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    previousSchool: { type: String, trim: true },
    gradeApplyingFor: { type: String, required: true, trim: true },
    documentUrl: { type: String, default: "" },
    status: {type: String,enum: ["Pending", "Approved", "Rejected"],default: "Pending"}
  },
  { timestamps: true }
);

export default mongoose.model("Admission", admissionSchema);
