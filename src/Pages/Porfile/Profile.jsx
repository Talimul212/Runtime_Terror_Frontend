import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div className="p-6 text-center text-gray-500 dark:text-slate-400">
        No user data available.
      </div>
    );
  }

  // Completion logic
  const fields = [
    user.fullName,
    user.email,
    user.avatar,
    user.skills?.length > 0,
    user.experiences?.length > 0,
    user.certificates?.length > 0,
    user.likedJobs?.length > 0,
  ];
  const filledCount = fields.filter(Boolean).length;
  const completionPercentage = Math.round((filledCount / fields.length) * 100);

  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white">
      {/* Completion Progress */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Profile Completion</h2>
        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-4">
          <div
            className="bg-indigo-600 h-4 rounded-full transition-all"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
          {completionPercentage}% complete
        </p>
      </div>

      {/* Header */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODZob7ROpqlx8WXwjueNwTOlC6Qum-yMiyfXiFRXkdhkHgybCpdvM1UpaXCL1ycfO8NI&usqp=CAU"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-600"
        />

        <div>
          <h1 className="text-2xl font-bold">{user.fullName || "Your Name"}</h1>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            {user.email || "Add your email"}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        {user.skills?.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-white rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Fill this section
          </p>
        )}
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {user.experienceLevel ? (
          <div className="border-l-4 border-indigo-600 pl-4">
            <p className="font-semibold">{user.experienceLevel}</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              Based on your selected experience level
            </p>
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Fill this section
          </p>
        )}
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Career Interests</h2>
        {user.careerInterests ? (
          <div className="border-l-4 border-indigo-600 pl-4">
            <p className="font-semibold">{user.careerInterests.join(", ")}</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              Based on your selected career interests
            </p>
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Fill this section
          </p>
        )}
      </div>
      {/* Certificates */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Certificates</h2>
        {user.certificates?.length > 0 ? (
          <ul className="space-y-2">
            {user.certificates.map((cert, index) => (
              <li
                key={index}
                className="bg-white dark:bg-slate-800 p-4 rounded-md shadow"
              >
                <p className="font-semibold">{cert.title}</p>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  {cert.issuer} · {cert.year}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Fill this section
          </p>
        )}
      </div>

      {/* Liked Jobs */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Liked Jobs</h2>
        {user.likedJobs?.length > 0 ? (
          <ul className="space-y-2">
            {user.likedJobs.map((job, index) => (
              <li
                key={index}
                className="bg-white dark:bg-slate-800 p-4 rounded-md shadow"
              >
                <p className="font-semibold">{job.title}</p>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  {job.company} · {job.location}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Fill this section
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
