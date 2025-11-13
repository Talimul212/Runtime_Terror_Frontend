import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch all resources
export const fetchResources = createAsyncThunk(
  "resources/fetchResources",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/resources");
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch resources");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const resourceSlice = createSlice({
  name: "resources",
  initialState: {
    resources: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResources.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.loading = false;
        state.resources = action.payload;
      })
      .addCase(fetchResources.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default resourceSlice.reducer;
