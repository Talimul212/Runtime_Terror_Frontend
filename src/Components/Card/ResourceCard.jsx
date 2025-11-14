import React from "react";
import { Link } from "react-router-dom";

const ResourceCard = ({ resource }) => {
  const {
    _id,
    title = "Untitled",
    type = "Unknown",
    provider = "Unknown",
    category = "General",
    description = "No description provided.",
    tags = [],
    updatedAt = new Date().toISOString(),
  } = resource || {};

  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-slate-800 transition hover:shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
        <span className="text-sm px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
          {type}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
        {provider} · {category}
      </p>

      <p className="text-sm text-gray-700 dark:text-slate-300 mb-4 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white rounded-md"
            >
              {tag}
            </span>
          ))
        ) : (
          <span className="text-xs text-gray-400 dark:text-slate-500">
            No tags listed
          </span>
        )}
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 mb-4">
        Updated on {new Date(updatedAt).toLocaleDateString()}
      </p>

      <Link
        to={`/resource/${_id}`}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ResourceCard;
