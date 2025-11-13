import React from "react";
import banner from "../../assets/banner.avif"; // Replace with actual image path
import { BriefcaseIcon, UserIcon, FlagIcon } from "@heroicons/react/24/solid"; // Optional: use your own icons
import HowItWorks from "./HowItWorks";
import BenefitsSection from "./BenefitsSection";

const stats = [
  {
    value: "10,000,000+",
    label: "Job seekers served",
    icon: <UserIcon className="h-8 w-8 text-indigo-600" />,
  },
  {
    value: "187,412",
    label: "Verified Remote & Flexible Jobs",
    icon: <BriefcaseIcon className="h-8 w-8 text-green-600" />,
  },
  {
    value: "12,431",
    label: "Companies currently hiring",
    icon: <FlagIcon className="h-8 w-8 text-orange-500" />,
  },
];

const About = () => {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 mb-10 gap-10 items-center md:px-20">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            About SkillMatch
          </h2>
          <p className="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed">
            Since 2007, SkillMatch has been the #1 job site for finding the best
            remote, work-from-home, and flexible jobs. With extensive
            experience, we specialize in helping job seekers navigate the remote
            job market with confidence.
          </p>
          <p className="text-gray-700 dark:text-slate-300 mb-6 leading-relaxed">
            Our expert team hand-screens every job listing to ensure legitimacy,
            saving you time and protecting you from scams. Whether you're
            looking for full-time, part-time, freelance, or flexible schedule
            opportunities, FlexJobs makes the job search faster, easier, and
            safer so you can focus on landing the right role.
          </p>
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition">
            Find Your Next Remote Job!
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={banner} // Replace with actual image path
            alt="Remote job illustration"
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
      <section className="bg-gray-50 dark:bg-slate-900 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
            Trusted by Millions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
              >
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-indigo-600">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HowItWorks />
      <BenefitsSection />
    </section>
  );
};

export default About;
