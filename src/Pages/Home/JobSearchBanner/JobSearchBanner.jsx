import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Accounting",
  "Analyst",
  "Bookkeeping",
  "Call Center",
  "Communications",
  "Customer Service",
  "Data Entry",
];

const JobSearchBanner = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // When user presses Enter or clicks search
  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/jobs?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <section className="bg-blue-600 text-white py-16 px-6 md:px-20 mx-32 rounded-3xl mb-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Stats */}
        <h2 className="text-3xl font-bold mb-4">
          Featuring <span className="text-orange-300">187,412</span> Online Jobs
          From <span className="text-orange-300">12,431</span> Companies
        </h2>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 flex items-center bg-white rounded-md">
          <input
            type="text"
            placeholder="Enter Keyword or Title to Find Remote Jobs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full p-4 rounded-md text-gray-800 placeholder-gray-500"
          />
          <button
            onClick={handleSearch}
            className="bg-orange-500 px-6 py-4 text-white font-semibold rounded-r-md hover:bg-orange-600"
          >
            Search
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => navigate("/jobs?location=us")}
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition"
          >
            Work From Anywhere in US
          </button>

          <button
            onClick={() => navigate("/jobs?location=world")}
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition"
          >
            Work From Anywhere in World
          </button>

          <button
            onClick={() => navigate("/jobs/categories")}
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition"
          >
            Explore Job Categories
          </button>
        </div>

        {/* Job Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => navigate(`/jobs?category=${encodeURIComponent(cat)}`)}
              className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Show More */}
        <p
         onClick={() => navigate("/jobs?filter=popular")}
         className="text-sm underline text-orange-200 hover:text-white cursor-pointer"
        >
        Show More Popular Job Searches
        </p>


      </div>
    </section>
  );
};

export default JobSearchBanner;
