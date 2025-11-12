import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./user.model.js";

export const registerUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new User({ ...userData, password: hashedPassword });
  return await user.save();
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return { user, token };
};

export const updateProfileInfo = async (userId, updates) => {
  return await User.findByIdAndUpdate(userId, updates, { new: true });
};

export const getUserById = async (userId) => {
  return await User.findById(userId);
};

export default {
  registerUser,
  loginUser,
  updateProfileInfo,
  getUserById,
};
