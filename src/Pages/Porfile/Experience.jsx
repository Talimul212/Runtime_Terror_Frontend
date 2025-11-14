import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice.js"; // adjust path if needed

const experienceOptions = ["Fresher", "Junior", "Mid"];

const Experience = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [selectedLevel, setSelectedLevel] = useState(
    user?.experienceLevel || ""
  );
  const [companyName, setCompanyName] = useState(user?.companyName || "");
  const [jobTitle, setJobTitle] = useState(user?.jobTitle || "");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitExperience = async () => {
    try {
      const updatedFields = {
        experienceLevel: selectedLevel,
        companyName: companyName.trim(),
        jobTitle: jobTitle.trim(),
      };

      const res = await fetch(
        `http://localhost:5000/api/v1/auth/update/${user._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedFields),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update profile");

      // ✅ Update Redux store and localStorage
      const updatedUser = { ...user, ...updatedFields };
      dispatch(setUser(updatedUser));
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setSubmitted(true);
    } catch (err) {
      console.error("Error updating profile:", err.message);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-slate-900 text-gray-800 dark:text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Professional Experience</h1>

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

      <div className="grid gap-4 mb-6">
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
          className="w-full p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800"
        />
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Job Title"
          className="w-full p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800"
        />
      </div>

      <button
        onClick={handleSubmitExperience}
        disabled={!selectedLevel || !companyName.trim() || !jobTitle.trim()}
        className={`px-6 py-2 rounded-md font-semibold transition ${
          selectedLevel && companyName.trim() && jobTitle.trim()
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
      >
        Submit Experience
      </button>

      {submitted && (
        <p className="text-green-600 font-medium mt-4">
          ✅ Experience details successfully updated!
        </p>
      )}
    </div>
  );
};

export default Experience;
