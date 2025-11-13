import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/features/jobs/jobsSlice.js";
import JobCard from "../../Components/Card/JobCard";

const jobTypes = ["Remote", "Hybrid", "On-site"];
const categories = ["Frontend", "Backend", "Design", "Marketing", "AI/ML"];

const AllJobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const filteredJobs = jobs.filter((job) => {
    const matchType = selectedType
      ? job.type?.toLowerCase() === selectedType.toLowerCase()
      : true;
    const matchCategory = selectedCategory
      ? job.skills
          ?.map((s) => s.toLowerCase())
          .includes(selectedCategory.toLowerCase())
      : true;
    return matchType && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-12 px-6 md:px-16 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-gradient-jobs-business-investment-image_13903.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-indigo-900/70 z-0"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Find Your Next Opportunity
            </h1>
            <p className="text-lg max-w-xl">
              Discover jobs tailored to your skills. Filter by category, work
              type, and more.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://png.pngtree.com/png-vector/20240918/ourmid/pngtree-job-searching-3d-illustrations-png-image_13869121.png"
              alt="Job search illustration"
              className="max-w-xs md:max-w-sm lg:max-w-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Filter + Job Listings */}
      <section className="py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="md:col-span-1 shadow rounded-lg p-6 bg-white dark:bg-slate-800 h-fit">
            <h2 className="text-xl font-bold mb-4">Filter Jobs</h2>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">Work Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-900"
              >
                <option value="">All</option>
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-900"
              >
                <option value="">All</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {
                setSelectedType("");
                setSelectedCategory("");
              }}
              className="text-sm text-indigo-600 hover:underline"
            >
              Clear Filters
            </button>
          </div>

          {/* Job Cards */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold mb-4">Job Listings</h2>

            {loading ? (
              <p className="text-center text-gray-500 dark:text-slate-400">
                Loading jobs...
              </p>
            ) : error ? (
              <p className="text-center text-red-500 dark:text-red-400">
                Error: {error}
              </p>
            ) : filteredJobs.length > 0 ? (
              <div className="grid gap-6">
                {filteredJobs.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-slate-400">
                No jobs found for the selected filters.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllJobs;
