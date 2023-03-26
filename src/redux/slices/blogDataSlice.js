import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../utils/api";

const initialState = {
  listPosts: [],
  usersDetails: [],
};

export const fetchPostsData = createAsyncThunk(
  "blogData/fetchPostsData",
  async () => {
    try {
      const response = await Api.get("posts");
      return response.data;
    } catch (err) {
      alert(err);
    }
  }
);

export const fetchUsersDetails = createAsyncThunk(
  "blogData/fetchUsersDetails",
  async (userId) => {
    try {
      const response = await Api.get(`users/${userId}`);
      return response.data;
    } catch (err) {
      alert(err);
    }
  }
);

export const blogDataSlice = createSlice({
  name: "blogData",
  initialState,
  reducers: {
    handlePostsData(state, action) {
      state.listPosts = action.payload;
    },
    handleUsersDetails(state, action) {
      state.usersDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsData.fulfilled, (state, action) => {
      state.listPosts = action.payload;
    });
    builder.addCase(fetchUsersDetails.fulfilled, (state, action) => {
      state.usersDetails = action.payload;
    });
  },
});

export const { handlePostsData, handleUsersDetails } = blogDataSlice.actions;

export const selectPostsData = (state) => state.blogData.listPosts;
export const selectUsersDetails = (state) => state.blogData.usersDetails;

export default blogDataSlice.reducer;
