import React from "react";
import {
  CheckCircleIcon,
  CursorArrowRaysIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Explore Verified Job Listings",
    description:
      "All of FlexJobs’ remote jobs and flexible opportunities are thoroughly screened to ensure they are legitimate. When you log in, you’ll only find high-quality opportunities—no scams, junk listings, or commission-only roles.",
    icon: <CheckCircleIcon className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Search Smarter, Apply Faster",
    description:
      "Use advanced search filters to find roles that match your skills, schedule, and preferences. Save searches, track applications, and follow companies to stay updated on new openings.",
    icon: <CursorArrowRaysIcon className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Access Career Support & Resources",
    description:
      "Get expert guidance with webinars, downloadable guides, job search articles, and more, all designed to help you land the right job faster.",
    icon: <BriefcaseIcon className="h-10 w-10 text-orange-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center underline decoration-indigo-500">
          How SkillMatch Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
