import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // <-- ADD THIS

const benefits = [
  {
    title: "Higher Quality Remote Job Listings",
    description:
      "Only legit remote jobs. No ads, scams, or junk to sift through. Our team spends 200+ hours/day verifying every job.",
  },
  {
    title: "Unlimited Job Search Resources",
    description:
      "Full access to all features including unlimited remote jobs, articles, skills tests, and webinars to help you with your remote job search.",
  },
  {
    title: "Save Time",
    description:
      "Go straight from job listings to applications. No more hopping from one job board to the next to find work-from-home jobs.",
  },
];

const JobsDifference = () => {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Benefits List */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            How{" "}
            <span className="underline decoration-orange-500 text-center">
              SkillMatch
            </span>{" "}
            is Different
          </h2>

          <div className="space-y-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate-300 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Updated Button */}
          <Link to="/blog">
            <button className="mt-8 bg-indigo-500 text-white px-10 py-4 rounded-md font-semibold hover:bg-orange-600 transition">
              Explore Articles
            </button>
          </Link>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="https://assets.flexjobs.com/blobcontent/flexjobs/images/how-different.png"
            alt="Remote worker"
            className="w-96 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default JobsDifference;
