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
    <section className="py-16 px-6 md:px-16 bg-white dark:bg-slate-900 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
        What Our Users Say
      </h2>

      {/* Featured Rotating Testimonial */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="transition-opacity duration-500 ease-in-out">
          <p className="text-xl italic text-gray-600 dark:text-slate-300">
            “{quote}”
          </p>
          <p className="mt-4 font-semibold text-indigo-600">{name}</p>
        </div>
      </div>

      {/* Static Grid of Last 3 Reviewers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="text-sm italic text-gray-700 dark:text-slate-300 mb-4">
              “{t.quote}”
            </p>
            <p className="font-semibold text-indigo-600">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
