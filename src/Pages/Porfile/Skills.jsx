import React, { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState(["React", "Node.js", "Tailwind"]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Manage Your Skills</h1>

      {/* Add Skill Form */}
      <form onSubmit={handleAddSkill} className="flex gap-4 mb-6 max-w-xl">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Enter a new skill"
          className="flex-1 p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add Skill
        </button>
      </form>

      {/* Skill List */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-white rounded-full"
          >
            <span>{skill}</span>
            <button
              onClick={() => handleRemoveSkill(skill)}
              className="text-xs text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
