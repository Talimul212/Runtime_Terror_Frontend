/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import AllJobs from "../Pages/Jobpage/AllJobs";
import AllResource from "../Pages/ResourcePage/AllResource";
import ProfileLayout from "../Layout/ProfileLayout";

// Profile Pages
import Profile from "../Pages/Porfile/Profile";
import Settings from "../Pages/Porfile/Settings";
import Skills from "../Pages/Porfile/Skills";
import Experience from "../Pages/Porfile/Experience";
import SignUp from "../Pages/Auth/SignUp";
import Login from "../Pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import CareerInterests from "../Pages/Porfile/CareerInterests";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import JobDetails from "../Pages/Jobpage/JobDetails";
import ResourceDetails from "../Pages/ResourcePage/ResourceDetails";
import CV_Analysis from "../Pages/Porfile/CV_Analysis";
import SkillGapForm from "../Pages/Porfile/SkillGapForm/SkillGapForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <AllJobs />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
      {
        path: "/resources",
        element: <AllResource />,
      },
      {
        path: "/resource/:id",
        element: <ResourceDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfileLayout />,
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Profile /> },
          { path: "settings", element: <Settings /> },
          { path: "skills", element: <Skills /> },
          { path: "experience", element: <Experience /> },
          { path: "career-interests", element: <CareerInterests /> },
          { path: "cv-analysis", element: <CV_Analysis /> },
          { path: "skill-gap", element: <SkillGapForm /> },
        ],
      },
    ],
  },
]);
