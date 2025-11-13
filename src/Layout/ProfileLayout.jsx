import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  HomeIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "Dashboard", path: "/profile", icon: HomeIcon },
  { name: "Settings", path: "/profile/settings", icon: Cog6ToothIcon },
  { name: "Skills", path: "/profile/skills", icon: LightBulbIcon },
  { name: "Experience", path: "/profile/experience", icon: BriefcaseIcon },
  {
    name: "Certificates",
    path: "/profile/certificates",
    icon: AcademicCapIcon,
  },
  { name: "Liked Jobs", path: "/profile/likes", icon: HeartIcon },
];

const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white grid grid-cols-1 md:grid-cols-7">
      {/* Sidebar */}
      <aside className="bg-white dark:bg-slate-800 p-6 border-r border-indigo-100 dark:border-slate-700">
        <h2 className="text-xl font-bold mb-6">Profile Menu</h2>
        <nav className="flex flex-col gap-4">
          {menuItems.map(({ name, path, icon }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 text-sm font-medium px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-700"
                }`
              }
            >
              {React.createElement(icon, { className: "h-5 w-5" })}
              {name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:col-span-6 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout;
