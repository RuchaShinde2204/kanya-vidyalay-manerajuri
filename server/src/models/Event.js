import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    location: { type: String, required: true, trim: true },
    imageUrl: { type: String, default: "" },
    category: { type: String, required: true, trim: true, default: "School Event" }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
