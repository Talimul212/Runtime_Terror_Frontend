import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const JobDetails = () => {
  const { id } = useParams();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const job = jobs?.find((item) => item._id === id);

  if (loading) return <div className="p-6">Loading job details...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  if (!job) return <div className="p-6 text-red-500">Job not found.</div>;

  const {
    title,
    company,
    location,
    type,
    description,
    requiredSkills = [],
    createdAt,
    salary = "$1,200/month",
    experience = "2+ years",
    workMode = "Remote",
    perks = ["Flexible hours", "Training budget", "Remote equipment support"],
    companyInsight = "We’re a fast-growing tech company focused on scalable solutions for global clients.",
    tips = "Tailor your application to highlight relevant skills and past project experience.",
  } = job;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Title & Meta */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">{title}</h1>
      <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
        {company} · {location} · {type}
      </p>
      <p className="text-sm text-gray-700 dark:text-slate-300 mb-6">
        Posted on {new Date(createdAt).toLocaleDateString()}
      </p>

      {/* Success Message */}
      {submitted && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6">
          ✅ Your application has been submitted successfully!
        </div>
      )}

      {/* Description */}
      <p className="text-base text-gray-800 dark:text-white mb-6 leading-relaxed">
        {description}
      </p>

      {/* Job Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-sm text-gray-800 dark:text-white">
          <strong>Experience:</strong> {experience}
        </div>
        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-sm text-gray-800 dark:text-white">
          <strong>Salary:</strong> {salary}
        </div>
        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-sm text-gray-800 dark:text-white">
          <strong>Work Mode:</strong> {workMode}
        </div>
      </div>

      {/* Required Skills */}
      <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {requiredSkills.length > 0 ? (
          requiredSkills.map((skill, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white rounded-full"
            >
              {skill}
            </span>
          ))
        ) : (
          <span className="text-sm text-gray-400 dark:text-slate-500">
            No skills listed
          </span>
        )}
      </div>

      {/* Perks & Benefits */}
      <h3 className="text-lg font-semibold mb-2">Perks & Benefits</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-slate-300 mb-6">
        {perks.map((perk, index) => (
          <li key={index}>{perk}</li>
        ))}
      </ul>

      {/* Company Insight */}
      <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded mb-8 text-sm text-indigo-800 dark:text-indigo-200">
        <strong>About {company}:</strong> {companyInsight}
      </div>

      {/* Tips */}
      <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded mb-8 text-sm text-yellow-800 dark:text-yellow-200">
        <strong>Tip:</strong> {tips}
      </div>

      {/* Apply Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        Apply Now
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-indigo-600">
              Application Form
            </h2>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setShowModal(false);
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white"
                  placeholder="Your name"
                  required
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
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Why are you a good fit?
                </label>
                <textarea
                  rows="4"
                  className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white"
                  placeholder="Briefly explain..."
                  required
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
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
