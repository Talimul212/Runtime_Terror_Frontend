import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResources } from "../../redux/features/resources/resourcesSlice.js";
import ResourceCard from "../../Components/Card/ResourceCard";

const resourceTypes = ["Course", "Video", "Article", "Workshop"];
const categories = ["Frontend", "Backend", "Design", "Marketing", "AI/ML"];

const AllResources = () => {
  const dispatch = useDispatch();
  const { resources, loading, error } = useSelector((state) => state.resources);

  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch]);

  const filteredResources = resources.filter((res) => {
    const matchType = selectedType
      ? res.type?.toLowerCase() === selectedType.toLowerCase()
      : true;
    const matchCategory = selectedCategory
      ? res.category?.toLowerCase() === selectedCategory.toLowerCase()
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
            "url('https://t4.ftcdn.net/jpg/04/45/70/71/360_F_445707107_elptpcI7pUDPa9kMdnX9e3506QdHfo7r.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-indigo-900/70 z-0"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Level Up with SkillMatch Resources
            </h1>
            <p className="text-lg max-w-xl mb-6">
              Explore curated courses, videos, and workshops designed to grow
              your skills and career.
            </p>
            <a
              href="/resources"
              className="inline-block bg-white text-indigo-700 font-semibold px-5 py-2 rounded-md hover:bg-indigo-100 transition"
            >
              Browse Resources
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://png.pngtree.com/png-vector/20240918/ourmid/pngtree-job-searching-3d-illustrations-png-image_13869121.png"
              alt="Learning illustration"
              className="max-w-xs md:max-w-sm lg:max-w-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Filter Resources</h2>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800"
              >
                <option value="">All</option>
                {resourceTypes.map((type) => (
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
                className="w-full p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800"
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

          {/* Cards */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold mb-4">Learning Resources</h2>

            {loading ? (
              <p className="text-center text-gray-500 dark:text-slate-400">
                Loading resources...
              </p>
            ) : error ? (
              <p className="text-center text-red-500 dark:text-red-400">
                Error: {error}
              </p>
            ) : filteredResources.length > 0 ? (
              <div className="grid gap-6">
                {filteredResources.map((res, index) => (
                  <ResourceCard key={index} resource={res} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-slate-400">
                No resources found for the selected filters.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllResources;
