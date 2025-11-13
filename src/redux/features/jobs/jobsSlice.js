import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all jobs
export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/jobs");
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch jobs");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Fetch job by ID
export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/jobs/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Job not found");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Create a new job
export const createJob = createAsyncThunk(
  "jobs/createJob",
  async (jobData, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create job");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    jobDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.jobDetails = action.payload;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default jobSlice.reducer;
