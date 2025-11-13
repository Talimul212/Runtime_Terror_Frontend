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
import Certificates from "../Pages/Porfile/Certificates";
import SignUp from "../Pages/Auth/SignUp";
import Login from "../Pages/Auth/Login";

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
        path: "/resources",
        element: <AllResource />,
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
        element: <ProfileLayout />,
        children: [
          { index: true, element: <Profile /> },
          { path: "settings", element: <Settings /> },
          { path: "skills", element: <Skills /> },
          { path: "experience", element: <Experience /> },
          { path: "certificates", element: <Certificates /> },
        ],
      },
    ],
  },
]);
