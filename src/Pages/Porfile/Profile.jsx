import React from "react";

const user = {
  name: "Talimul Islam",
  email: "talimul@example.com",
  avatar: "/profile.jpg", // Replace with actual image path
  skills: ["React", "Node.js", "Tailwind", "Git", "API Integration"],
  experiences: [
    {
      role: "Frontend Developer",
      company: "SkillMatch Inc.",
      duration: "2023–2025",
    },
    {
      role: "WordPress Developer",
      company: "Listint Digital",
      duration: "2022–2023",
    },
  ],
  certificates: [
    {
      title: "React Mastery",
      issuer: "Coursera",
      year: 2024,
    },
    {
      title: "Fullstack Developer",
      issuer: "Udemy",
      year: 2023,
    },
  ],
  likedJobs: [
    {
      title: "Backend Engineer",
      company: "BrightAI Labs",
      location: "Remote",
    },
    {
      title: "UI/UX Designer",
      company: "DesignHive",
      location: "Dhaka",
    },
  ],
};

const Profile = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white">
      {/* Header */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-4 border-indigo-600"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            {user.email}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
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
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <ul className="space-y-4">
          {user.experiences.map((exp, index) => (
            <li key={index} className="border-l-4 border-indigo-600 pl-4">
              <p className="font-semibold">{exp.role}</p>
              <p className="text-sm text-gray-500 dark:text-slate-400">
                {exp.company} · {exp.duration}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Certificates */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Certificates</h2>
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
      </div>

      {/* Liked Jobs */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Liked Jobs</h2>
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
      </div>
    </div>
  );
};

export default Profile;
