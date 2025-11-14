import React, { useState } from "react";

const articles = [
  {
    title: "10 Companies Hiring for Seasonal Remote Jobs and Holiday Jobs",
    image:
      "https://img.freepik.com/free-photo/employment-opportunity-hiring-jobs-icon_53876-122787.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "15 Remote Job Boards & 5 More Places to Find Jobs in 2025",
    image:
      "https://img.freepik.com/free-photo/employment-opportunity-hiring-jobs-icon_53876-122787.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "25 Remote Jobs That Pay $25 an Hour",
    image:
      "https://img.freepik.com/free-photo/employment-opportunity-hiring-jobs-icon_53876-122787.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

// Trending Searches
const trending = [
  "Remote Jobs",
  "Data Analyst",
  "Frontend Developer",
  "Interview Tips",
  "Resume Guide",
];

// New: Latest + Trending Articles Section
const careerGuides = [
  {
    title: "30 Best Stay at Home Jobs for Moms and Dads",
    description:
      "Discover flexible, family-friendly jobs you can do from home—ideal for parents.",
    image:
      "https://img.freepik.com/free-photo/mother-working-home_23-2149012456.jpg?w=740&q=80",
    category: "Trending",
  },
  {
    title: "20 Companies Hiring for Part Time, Remote, Work From Home Jobs",
    description:
      "Explore companies offering part-time WFH jobs you can apply to today.",
    image:
      "https://img.freepik.com/free-photo/remote-job-work-concept_23-2149012182.jpg?w=740&q=80",
    category: "Latest",
  },
  {
    title: "30 Common Interview Questions and Answers",
    description:
      "Boost confidence with expert tips and sample answers for job interviews.",
    image:
      "https://img.freepik.com/free-photo/job-interview-concept_23-2149168560.jpg?w=740&q=80",
    category: "Trending",
  },
  {
    title: "30 Best Side Hustles 2025",
    description:
      "Explore the top gig jobs and side hustles to increase your income in 2025.",
    image:
      "https://img.freepik.com/free-photo/freelancer-working-laptop_23-2149012460.jpg?w=740&q=80",
    category: "Latest",
  },
];

const Blog = () => {
  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Main Section */}
      <section className="bg-white dark:bg-slate-900 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left Banner */}
          <div className="relative">
            <img
              src="https://www.workitdaily.com/media-library/man-starts-his-new-job.jpg?id=27287891&width=1200&height=800&quality=50"
              alt="Remote worker"
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
              SkillMatch 2025 • Top 100 Remote Work Companies to Watch
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Job Search and Career Advice
            </h2>

            {/* Search Bar */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search Articles & Content"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-3 rounded border dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            {/* Trending Searches */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                Trending Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {trending.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(item)}
                    className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-slate-700 dark:text-white text-gray-700 hover:bg-orange-500 hover:text-white transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div className="space-y-6">
              {filteredArticles.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">
                  No articles found.
                </p>
              ) : (
                filteredArticles.map((article, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg shadow"
                    />
                    <p className="text-sm text-gray-700 dark:text-slate-300 font-medium">
                      {article.title}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Latest & Trending Career Guides Section */}
      <section className="bg-gray-50 dark:bg-slate-800 py-14 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
            Latest & Trending Career Guides
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerGuides.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg"
                />

                <span className="inline-block mt-3 text-xs px-3 py-1 bg-orange-500 text-white rounded-full">
                  {item.category}
                </span>

                <h3 className="text-lg font-semibold mt-3 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
