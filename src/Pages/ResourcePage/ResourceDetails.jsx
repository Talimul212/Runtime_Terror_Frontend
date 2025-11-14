import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ResourceDetails = () => {
  const { id } = useParams();
  const { resources, loading, error } = useSelector((state) => state.resources);
  const [showModal, setShowModal] = useState(false);

  const resource = resources?.find((item) => item._id === id);

  if (loading) return <div className="p-6">Loading resource details...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  if (!resource)
    return <div className="p-6 text-red-500">Resource not found.</div>;

  const {
    title,
    type,
    provider,
    category,
    description,
    tags = [],
    updatedAt,
    relatedSkills = [],
    format = "PDF",
    accessLevel = "Free",
    estimatedTime = "30 min",
    outcomes = [
      "Understand core concepts",
      "Apply techniques in real projects",
      "Improve job readiness",
    ],
    tips = "Use this resource alongside hands-on practice for best results.",
  } = resource;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Title & Meta */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">{title}</h1>
      <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
        {provider} · {category} · {type}
      </p>
      <p className="text-sm text-gray-700 dark:text-slate-300 mb-6">
        Updated on {new Date(updatedAt).toLocaleDateString()}
      </p>

      {/* Description */}
      <p className="text-base text-gray-800 dark:text-white mb-6 leading-relaxed">
        {description}
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-sm text-gray-800 dark:text-white">
          <strong>Format:</strong> {format}
        </div>
        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-sm text-gray-800 dark:text-white">
          <strong>Access:</strong> {accessLevel}
        </div>
        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-sm text-gray-800 dark:text-white">
          <strong>Estimated Time:</strong> {estimatedTime}
        </div>
      </div>

      {/* Related Skills */}
      {relatedSkills.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mb-2">Related Skills</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {relatedSkills.map((skill, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      )}

      {/* Tags */}
      <h3 className="text-lg font-semibold mb-2">Tags</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white rounded-full"
            >
              {tag}
            </span>
          ))
        ) : (
          <span className="text-sm text-gray-400 dark:text-slate-500">
            No tags listed
          </span>
        )}
      </div>

      {/* Learning Outcomes */}
      <h3 className="text-lg font-semibold mb-2">What You'll Learn</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-slate-300 mb-6">
        {outcomes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Tips */}
      <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded mb-8 text-sm text-yellow-800 dark:text-yellow-200">
        <strong>Tip:</strong> {tips}
      </div>

      {/* Request Access Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        Request Access
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-indigo-600">
              Access Request Form
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Purpose of Access
                </label>
                <textarea
                  rows="4"
                  className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white"
                  placeholder="Explain why you need this resource..."
                ></textarea>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 dark:bg-slate-600 rounded hover:bg-gray-400 dark:hover:bg-slate-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceDetails;
