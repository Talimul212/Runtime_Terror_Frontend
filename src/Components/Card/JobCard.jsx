import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-slate-800 transition hover:shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-indigo-600">{job.title}</h3>
        <span className="text-sm px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
          {job.type}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
        {job.company} · {job.location}
      </p>

      <p className="text-sm text-gray-700 dark:text-slate-300 mb-4 line-clamp-3">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500">
        Posted on {new Date(job.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default JobCard;
