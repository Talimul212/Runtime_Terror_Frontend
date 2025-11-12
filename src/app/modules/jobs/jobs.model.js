import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    requiredSkills: [{ type: String }],
    experienceLevel: { type: String },
    jobType: {
      type: String,
      enum: ["Internship", "Part-time", "Full-time", "Freelance"],
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
