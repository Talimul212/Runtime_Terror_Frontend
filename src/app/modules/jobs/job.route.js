import express from "express";
import {
  postJob,
  fetchJobs,
  fetchJobById,
  modifyJob,
  removeJob,
} from "./job.controller.js";

const router = express.Router();

router.post("/", postJob);
router.get("/", fetchJobs);
router.get("/:id", fetchJobById);
router.put("/:id", modifyJob);
router.delete("/:id", removeJob);

export const JobRoutes = router;
