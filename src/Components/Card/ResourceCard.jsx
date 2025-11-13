import React from "react";

const ResourceCard = ({ resource }) => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-slate-800 transition hover:shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-indigo-600">{resource.title}</h3>
        <span className="text-sm px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
          {resource.type}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
        {resource.provider} · {resource.category}
      </p>

      <p className="text-sm text-gray-700 dark:text-slate-300 mb-4 line-clamp-3">
        {resource.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500">
        Updated on {new Date(resource.updatedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ResourceCard;
