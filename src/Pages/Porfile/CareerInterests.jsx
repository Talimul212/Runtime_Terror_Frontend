import React, { useState } from "react";
import { useSelector } from "react-redux";

const CareerInterests = () => {
  const { user } = useSelector((state) => state.auth);
  const [interests, setInterests] = useState(user?.careerInterests || []);
  const [newInterest, setNewInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAddInterest = (e) => {
    e.preventDefault();
    const trimmed = newInterest.trim();
    if (!trimmed || interests.includes(trimmed)) return;

    setInterests([...interests, trimmed]);
    setNewInterest("");
  };

  const handleRemoveInterest = (interestToRemove) => {
    setInterests(interests.filter((interest) => interest !== interestToRemove));
  };

  const handleSubmitInterests = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/auth/update/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ careerInterests: interests }),
        }
      );

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.message || "Failed to update career interests");
      console.log("Career interests updated:", data);
      setSubmitted(true);
    } catch (err) {
      console.error("Error updating career interests:", err.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-slate-900 text-gray-800 dark:text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Manage Your Career Interests</h1>

      <form onSubmit={handleAddInterest} className="flex gap-4 mb-6 max-w-xl">
        <input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder="Enter a career interest"
          className="flex-1 p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </form>

      <div className="flex flex-wrap gap-3 mb-6">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-white rounded-full"
          >
            <span>{interest}</span>
            <button
              onClick={() => handleRemoveInterest(interest)}
              className="text-xs text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {interests.length > 0 && !submitted && (
        <button
          onClick={handleSubmitInterests}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Submit Career Interests
        </button>
      )}

      {submitted && (
        <p className="text-green-600 font-medium mt-4">
          ✅ Career interests successfully updated!
        </p>
      )}

      {interests.length === 0 && (
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Add at least one interest to enable submission.
        </p>
      )}
    </div>
  );
};

export default CareerInterests;
