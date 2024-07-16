import { configureStore } from '@reduxjs/toolkit';
import refreshReducer from "./refreshSlice"; // Import the reducer from the slice file
import updateReducer from "./updateSlice";
export const Store = configureStore({
  reducer: {
    refreshKey: refreshReducer ,
    updateData: updateReducer
  },
});

export default Store;
