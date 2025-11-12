import express from "express";
import { UserRoutes } from "../modules/User/user.route.js";
import { JobRoutes } from "../modules/jobs/job.route.js";
import { ResourceRoutes } from "../modules/Resource/resource.route.js";
const routes = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    routes: UserRoutes,
  },
  { path: "/jobs", routes: JobRoutes },
  { path: "/resources", routes: ResourceRoutes },
];

moduleRoutes.forEach((route) => routes.use(route.path, route.routes));
export default routes;
