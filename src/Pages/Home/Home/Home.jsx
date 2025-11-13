import React from "react";
import Banner from "../Banner/Banner";
import SkillCategories from "../SkillCategories/SkillCategories";
import Testimonials from "../Testimonials/Testimonials";
import JobsDifference from "../FlexJobsDifference/JobsDifference";
import JobSearchBanner from "../JobSearchBanner/JobSearchBanner";
const Home = () => {
  return (
    <div>
      <Banner />
      <section className="max-w-4xl mx-auto py-10 -mt-5">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-1 p-3 rounded border"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 p-3 rounded border"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Search
          </button>
        </div>
      </section>

      <SkillCategories />
      <JobsDifference />
      <Testimonials />
      <JobSearchBanner />
    </div>
  );
};

export default Home;
