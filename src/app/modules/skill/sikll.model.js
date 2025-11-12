import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String },
});

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
