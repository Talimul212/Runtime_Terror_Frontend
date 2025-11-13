import React, { useState } from "react";
import { useSelector } from "react-redux";

const experienceOptions = ["Fresher", "Junior", "Mid"];

const Experience = () => {
  const { user } = useSelector((state) => state.auth);
  const [selectedLevel, setSelectedLevel] = useState(
    user?.experienceLevel || ""
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitExperience = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/auth/update/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ experienceLevel: selectedLevel }),
        }
      );

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.message || "Failed to update experience level");
      console.log("Experience level updated:", data);
      setSubmitted(true);
    } catch (err) {
      console.error("Error updating experience level:", err.message);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-slate-900 text-gray-800 dark:text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Select Your Experience Level</h1>

      <div className="grid gap-4 mb-6">
        {experienceOptions.map((level) => (
          <label
            key={level}
            className={`flex items-center gap-3 p-4 rounded-md border cursor-pointer transition ${
              selectedLevel === level
                ? "border-indigo-600 bg-indigo-50 dark:bg-slate-800"
                : "border-gray-300 dark:border-slate-700"
            }`}
          >
            <input
              type="radio"
              name="experience"
              value={level}
              checked={selectedLevel === level}
              onChange={() => setSelectedLevel(level)}
              className="accent-indigo-600"
            />
            <span className="font-medium">{level}</span>
          </label>
        ))}
      </div>

      <button
        onClick={handleSubmitExperience}
        disabled={!selectedLevel}
        className={`px-6 py-2 rounded-md font-semibold transition ${
          selectedLevel
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
      >
        Submit Experience Level
      </button>

      {submitted && (
        <p className="text-green-600 font-medium mt-4">
          ✅ Experience level successfully updated!
        </p>
      )}
    </div>
  );
};

export default Experience;
