import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    platform: { type: String },
    url: { type: String },
    relatedSkills: [{ type: String }],
    cost: { type: String, enum: ["Free", "Paid"] },
  },
  { timestamps: true }
);
const Resource = mongoose.model("Resource", resourceSchema);
export default Resource;
