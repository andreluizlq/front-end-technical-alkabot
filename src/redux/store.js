import { configureStore } from "@reduxjs/toolkit";
import blogDataReducer from "./slices/blogDataSlice";

export const store = configureStore({
  reducer: {
    blogData: blogDataReducer,
  },
});
