/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import AllJobs from "../Pages/Jobpage/AllJobs";
import AllResource from "../Pages/ResourcePage/AllResource";

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
    ],
  },
]);
