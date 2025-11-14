import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ResourceDetails = () => {
  const { id } = useParams();
  const { resources, loading, error } = useSelector((state) => state.resources);
  const { user } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);

  const resource = resources?.find((item) => item._id === id);

  if (loading) return <div className="p-6 text-center text-gray-500">Loading resource details...</div>;
  if (error) return <div className="p-6 text-center text-red-500">Error: {error}</div>;
  if (!resource) return <div className="p-6 text-center text-red-500">Resource not found.</div>;

  const { title, type, provider, category, description } = resource;

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-5xl font-extrabold text-indigo-600 tracking-wide">{title}</h1>
        <p className="text-sm text-gray-500 dark:text-slate-400">
          {provider} · {category} · <span className="capitalize">{type}</span>
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">{description}</p>

      {/* Request Access Button */}
      <div className="text-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          Request Access
        </button>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg p-8 relative transform scale-95 animate-scaleUp transition-transform">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-6 text-indigo-600">Request Access</h2>

            {/* User Details */}
            <div className="mb-6 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl shadow-inner">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Details</h3>
              <p className="mb-1"><strong>Name:</strong> {user?.name || user?.fullName || "N/A"}</p>
              <p className="mb-1"><strong>Email:</strong> {user?.email || "N/A"}</p>
              {user?.skills && user.skills.length > 0 && (
                <p><strong>Skills:</strong> {user.skills.join(", ")}</p>
              )}
            </div>

            {/* Resource Details */}
            <div className="mb-6 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl shadow-inner">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Resource Details</h3>
              <p className="mb-1"><strong>Title:</strong> {title}</p>
              <p className="mb-1"><strong>Type:</strong> {type}</p>
              <p className="mb-1"><strong>Provider:</strong> {provider}</p>
              <p className="mb-1"><strong>Category:</strong> {category}</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:scale-105 transform transition-all duration-300 font-medium shadow-lg"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceDetails;
