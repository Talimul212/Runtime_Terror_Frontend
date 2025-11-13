import React, { useState } from "react";
import { useSelector } from "react-redux";

const Skills = () => {
  const { user } = useSelector((state) => state.auth);
  const [requiredSkills, setSkills] = useState(user?.requiredSkills || []);
  const [newSkill, setNewSkill] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleAddSkill = (e) => {
    e.preventDefault();
    const trimmed = newSkill.trim();
    if (!trimmed || requiredSkills.includes(trimmed)) return;

    setSkills([...requiredSkills, trimmed]);
    setNewSkill("");
  };
  console.log(requiredSkills);

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(requiredSkills.filter((skill) => skill !== skillToRemove));
  };
  console.log(user);

  const handleSubmitSkills = async () => {
    console.log(requiredSkills);

    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/auth/update/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ skills: requiredSkills }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update skills");
      console.log("Skills updated:", data);
      setSubmitted(true);
    } catch (err) {
      console.error("Error updating skills:", err.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Manage Your Skills</h1>

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

      <div className="flex flex-wrap gap-3 mb-6">
        {requiredSkills.map((skill, index) => (
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

      {requiredSkills.length >= 5 && !submitted && (
        <button
          onClick={handleSubmitSkills}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Submit Skills
        </button>
      )}

      {submitted && (
        <p className="text-green-600 font-medium mt-4">
          ✅ Skills successfully updated!
        </p>
      )}

      {requiredSkills.length < 5 && (
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Add at least <strong>{5 - requiredSkills.length}</strong> more skill
          {5 - requiredSkills.length > 1 ? "s" : ""} to enable submission.
        </p>
      )}
    </div>
  );
};

export default Skills;
