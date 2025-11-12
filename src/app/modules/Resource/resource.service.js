import Resource from "./resource.model.js";

export const createResource = async (data) => {
  const resource = new Resource(data);
  return await resource.save();
};

export const getAllResources = async (filters = {}) => {
  return await Resource.find(filters);
};

export const getResourceById = async (id) => {
  return await Resource.findById(id);
};

export const updateResource = async (id, updates) => {
  return await Resource.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteResource = async (id) => {
  return await Resource.findByIdAndDelete(id);
};

export default {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
};
