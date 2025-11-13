import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const benefits = [
  {
    title: "High-Quality Remote & Flexible Jobs",
    description:
      "We help people find professional, remote and flexible jobs in 50+ career fields, from entry-level to executive, part-time to full-time, in the U.S. and around the world.",
  },
  {
    title: "Every Job & Company Researched for You",
    description:
      "Our expert team finds and screens the best remote and flexible jobs and provides information on each company to help you decide whether to apply.",
  },
  {
    title: "High-Quality Support & Guidance",
    description:
      "Get access to webinars, one-on-one coaching, downloadable guides, and a library of job search resources to help you navigate your job search with confidence.",
  },
  {
    title: "No-Risk Satisfaction Guarantee",
    description:
      "We're confident our services will be just what you need, but if you're dissatisfied with your membership within the first 30 days, we'll refund your money.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-indigo-600 text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="relative inline-block uppercase">
            Benefits of Using{" "}
            <span className="text-orange-400 underline decoration-4">
              SkillMatch
            </span>
          </span>
        </h2>
        <button className="mt-4 mb-12 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
          Get Started
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow flex items-start gap-4"
            >
              <CheckCircleIcon className="h-8 w-8 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
