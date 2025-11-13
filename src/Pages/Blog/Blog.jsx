import React from "react";

const articles = [
  {
    title: "10 Companies Hiring for Seasonal Remote Jobs and Holiday Jobs",
    image:
      "https://img.freepik.com/free-photo/employment-opportunity-hiring-jobs-icon_53876-122787.jpg?semt=ais_hybrid&w=740&q=80", // Replace with actual image path
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

const Blog = () => {
  return (
    <div>
      {" "}
      <section className="bg-white dark:bg-slate-900 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Banner */}
          <div className="relative">
            <img
              src="https://www.workitdaily.com/media-library/man-starts-his-new-job.jpg?id=27287891&width=1200&height=800&quality=50&coordinates=0%2C0%2C0%2C0" // Replace with actual image path
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
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search Articles & Content"
                className="w-full p-3 rounded border dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <div className="space-y-6">
              {articles.map((article, index) => (
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
