import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    education: { type: String },
    experienceLevel: { type: String, enum: ["Fresher", "Junior", "Mid"] },
    careerTrack: { type: String },
    skills: [{ type: String }],
    projects: [{ type: String }],
    careerInterests: [{ type: String }],
    cvText: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
