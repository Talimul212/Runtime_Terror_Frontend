import React from "react";
import { FaStar } from "react-icons/fa";
import Bannerlogo from "../../../assets/banner.avif";
const Banner = () => {
  return (
    <section className="bg-white dark:bg-slate-900 w-full py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="max-w-xl">
        <img
          src="/logo.png" // Replace with your actual logo path
          alt="SkillMatch Logo"
          className="h-24 mb-4"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          <span className="text-indigo-600">#1 Skill-Matching Job Site</span>
          <br />
          No Ads, Scams, or Junk
        </h1>
        <p className="text-gray-600 dark:text-slate-400 mb-6">
          Find legitimate work-from-home jobs with flexible hours and hybrid
          options. Discover resources tailored to your skills and career goals.
        </p>
        <a
          href="/jobs"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-md transition"
        >
          Find Your Next Opportunity!
        </a>

        {/* Highlights */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300">
            <FaStar className="text-yellow-500" />
            <span>100k+ Jobs Available</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300">
            <FaStar className="text-yellow-500" />
            <span>100% Remote Jobs</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="max-w-md">
        <img
          src={Bannerlogo}
          alt="Remote work"
          className="rounded-lg  w-full"
        />
      </div>
    </section>
  );
};

export default Banner;
