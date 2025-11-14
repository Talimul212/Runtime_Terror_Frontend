import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice.js"; // adjust path if needed

const Skills = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const initialSkills = user?.requiredSkills || [];

  const [requiredSkills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const suggestedSkills = [
    "React",
    "Node.js",
    "Tailwind CSS",
    "Redux",
    "MongoDB",
    "TypeScript",
    "Express",
    "Next.js",
    "Docker",
    "GraphQL",
  ];

  const handleAddSkill = (e) => {
    e.preventDefault();
    const trimmed = newSkill.trim();
    if (!trimmed || requiredSkills.includes(trimmed)) return;
    setSkills([...requiredSkills, trimmed]);
    setNewSkill("");
  };

  const handleAddSuggestedSkill = (skill) => {
    if (!requiredSkills.includes(skill)) {
      setSkills([...requiredSkills, skill]);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(requiredSkills.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmitSkills = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/auth/update/${user._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ skills: requiredSkills }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update skills");

      // ✅ Update Redux store and localStorage
      const updatedUser = { ...user, requiredSkills };
      dispatch(setUser(updatedUser));
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setSubmitted(true);
    } catch (err) {
      console.error("Error updating skills:", err.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Manage Your Skills</h1>

      <form onSubmit={handleAddSkill} className="flex gap-4 mb-4 max-w-xl">
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

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Suggested Skills</h2>
        <div className="flex flex-wrap gap-2">
          {suggestedSkills.map((skill, index) => (
            <button
              key={index}
              onClick={() => handleAddSuggestedSkill(skill)}
              className={`px-3 py-1 rounded-full text-sm ${
                requiredSkills.includes(skill)
                  ? "bg-gray-300 dark:bg-slate-700 text-gray-500 cursor-not-allowed"
                  : "bg-indigo-200 dark:bg-slate-600 text-indigo-700 hover:bg-indigo-300"
              }`}
              disabled={requiredSkills.includes(skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

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
