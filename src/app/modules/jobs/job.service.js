import Job from "./jobs.model.js";

export const createJob = async (jobData) => {
  const job = new Job(jobData);
  return await job.save();
};

export const getAllJobs = async (filters = {}) => {
  return await Job.find(filters);
};

export const getJobById = async (id) => {
  return await Job.findById(id);
};

export const updateJob = async (id, updates) => {
  return await Job.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteJob = async (id) => {
  return await Job.findByIdAndDelete(id);
};

export default {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};
