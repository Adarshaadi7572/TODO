import { createSlice } from "@reduxjs/toolkit";

const initialState = {}; // Initial state

export const updateSlice = createSlice({
  name: "refreshSlice",
  initialState,
  reducers: {
    updateSliceActive: (item, index) => {
     
      return {item:item, index:index};
    },
  },
});

export const { updateSliceActive } = updateSlice.actions;
export default updateSlice.reducer;