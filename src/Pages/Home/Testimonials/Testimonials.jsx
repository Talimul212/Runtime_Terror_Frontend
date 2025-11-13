import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    quote:
      "SkillMatch helped me land my first remote job as a frontend developer!",
  },
  {
    name: "Tanvir Ahmed",
    quote: "The dashboard showed me exactly what skills I needed to grow.",
  },
  {
    name: "Nusrat Jahan",
    quote: "I found a course and a job in one week. Amazing platform!",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { name, quote } = testimonials[index];

  return (
    <section className="py-12 px-6 md:px-16 bg-white dark:bg-slate-900 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        What Our Users Say
      </h2>
      <div className="max-w-xl mx-auto">
        <p className="text-lg italic text-gray-600 dark:text-slate-300 transition-opacity duration-500 ease-in-out">
          “{quote}”
        </p>
        <p className="mt-4 font-semibold text-indigo-600">{name}</p>
      </div>
    </section>
  );
};

export default Testimonials;
