import React, { useEffect, useState } from "react";
import { FaRocketchat } from "react-icons/fa";
import Banner from "../Banner/Banner";
import SkillCategories from "../SkillCategories/SkillCategories";
import Testimonials from "../Testimonials/Testimonials";
import JobsDifference from "../FlexJobsDifference/JobsDifference";
import JobSearchBanner from "../JobSearchBanner/JobSearchBanner";
import SkillGapForm from "../../Porfile/SkillGapForm/SkillGapForm";
import ChatBot from "../../../Components/ChatBot/ChatBot";
const Home = () => {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  const handleIconClick = () => setIsChatBotOpen(true);
  const closeModal = () => setIsChatBotOpen(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isChatBotOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isChatBotOpen]);

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
      <SkillGapForm />

      {/* ChatBot Trigger */}
      <div>
        <button
          onClick={handleIconClick}
          aria-label="Open ChatBot"
          className="fixed bottom-[49%] right-0 z-50 cursor-pointer"
        >
          <FaRocketchat className="text-indigo-600 text-5xl border-indigo-600 border-[1px] border-e-0 bg-white rounded-s-full w-16 p-2 shadow-md" />
        </button>

        {/* ChatBot Modal */}
        {isChatBotOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="w-[90%] sm:w-[400px] rounded-lg shadow-lg relative bg-white dark:bg-slate-900"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
            >
              <button
                onClick={closeModal}
                aria-label="Close ChatBot"
                className="absolute top-4 right-2 z-50 bg-white border border-[#ffffff] hover:bg-indigo-600 duration-500 rounded-full w-10 h-10 flex justify-center items-center text-indigo-600 hover:text-white"
              >
                &times;
              </button>
              <ChatBot />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
