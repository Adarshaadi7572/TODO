import { createSlice } from "@reduxjs/toolkit";

const initialState = true; // Initial state

export const refreshSlice = createSlice({
  name: "refreshSlice",
  initialState,
  reducers: {
    refreshSliceActive: (state) => {
      console.log("Refreshing sidebar from Redux");
      return !state;
    },
  },
});

export const { refreshSliceActive } = refreshSlice.actions;
export default refreshSlice.reducer;