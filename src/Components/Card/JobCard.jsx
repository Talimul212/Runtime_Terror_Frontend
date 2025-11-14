/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const {
    _id, // assuming each job has a unique ID
    title = "Untitled",
    type = "Unknown",
    company = "Unknown",
    location = "Unknown",
    description = "No description provided.",
    requiredSkills = [],
    createdAt = new Date().toISOString(),
  } = job || {};
  console.log(job);

  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-slate-800 transition hover:shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
        <span className="text-sm px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
          {type}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
        {company} · {location}
      </p>

      <p className="text-sm text-gray-700 dark:text-slate-300 mb-4 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {Array.isArray(requiredSkills) && requiredSkills.length > 0 ? (
          requiredSkills.map((skill, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white rounded-md"
            >
              {skill}
            </span>
          ))
        ) : (
          <span className="text-xs text-gray-400 dark:text-slate-500">
            No skills listed
          </span>
        )}
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 mb-4">
        Posted on {new Date(createdAt).toLocaleDateString()}
      </p>

      <Link
        to={`/job/${_id}`}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
