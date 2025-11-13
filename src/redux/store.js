import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import jobReducer from "./features/jobs/jobsSlice.js";
import resourceReducer from "./features/resources/resourcesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
    resources: resourceReducer,
  },
});
