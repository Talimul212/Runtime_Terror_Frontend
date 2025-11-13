import React from "react";

const Settings = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      <form className="space-y-6 max-w-xl">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            defaultValue="Talimul Islam"
            className="w-full p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            defaultValue="talimul@example.com"
            className="w-full p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-3 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
