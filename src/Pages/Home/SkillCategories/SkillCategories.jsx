import React from "react";

const skills = [
  "Web Development",
  "Data Science",
  "UI/UX Design",
  "Marketing",
  "Cybersecurity",
  "AI & ML",
  "Cloud Computing",
  "Project Management",
];

const SkillCategories = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50 dark:bg-slate-800">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Explore Skill Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <p className="text-center text-indigo-600 font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCategories;
