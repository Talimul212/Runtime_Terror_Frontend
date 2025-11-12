import express from "express";
import {
  postResource,
  fetchResources,
  fetchResourceById,
  modifyResource,
  removeResource,
} from "./resource.controller.js";

const router = express.Router();

router.post("/", postResource);
router.get("/", fetchResources);
router.get("/:id", fetchResourceById);
router.put("/:id", modifyResource);
router.delete("/:id", removeResource);

export const ResourceRoutes = router;
