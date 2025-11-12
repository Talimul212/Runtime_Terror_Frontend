import express from "express";

const router = express.Router();
import {
  getProfile,
  login,
  register,
  updateProfile,
} from "./user.controller.js";
import authMiddleware from "../../middlewares/auth.js";

router.post("/register", register);
router.post("/login", login);
router.get("/profile/:id", getProfile);
router.put("/profile/:id", updateProfile);

export const UserRoutes = router;
