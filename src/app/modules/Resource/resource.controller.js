import {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
} from "./resource.service.js";

export const postResource = async (req, res) => {
  try {
    const resource = await createResource(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const fetchResources = async (req, res) => {
  try {
    const resources = await getAllResources(req.query);
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const fetchResourceById = async (req, res) => {
  try {
    const resource = await getResourceById(req.params.id);
    if (!resource)
      return res.status(404).json({ message: "Resource not found" });
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const modifyResource = async (req, res) => {
  try {
    const updated = await updateResource(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const removeResource = async (req, res) => {
  try {
    await deleteResource(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export default {
  postResource,
  fetchResources,
  fetchResourceById,
  modifyResource,
  removeResource,
};
