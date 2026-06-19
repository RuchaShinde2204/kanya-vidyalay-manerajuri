import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    category: { type: String, required: true, trim: true, default: "Campus" },
    uploadedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);
