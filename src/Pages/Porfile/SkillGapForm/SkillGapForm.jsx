import React, { useState } from "react";

const SkillGapForm = () => {
  const [skills, setSkills] = useState("");
  const [job, setJob] = useState("Data Analyst");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("http://localhost:5000/api/skill-gap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userSkills: skills,
          targetJob: job,
        }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
      setResult("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">
        🔍 Skill Gap Analyzer
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
            Your Current Skills
          </label>
          <textarea
            placeholder="e.g. React, Node.js, SQL"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            rows={4}
            className="w-full p-3 border rounded-md dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
            Target Job Role
          </label>
          <select
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="w-full p-3 border rounded-md dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="Data Analyst">Data Analyst</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Graphic Designer">Graphic Designer</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md font-semibold transition ${
            loading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          {loading ? "Analyzing..." : "Analyze Skill Gap"}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 border-l-4 border-green-500 bg-green-50 dark:bg-slate-800 rounded-md">
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">
            ✅ Analysis Result
          </h3>
          <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-white">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SkillGapForm;
