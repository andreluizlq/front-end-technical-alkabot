import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../utils/api";

const initialState = {
  listPosts: [],
  listPostsComments: [],
  listUsers: [],
  usersDetails: {},
};

export const fetchPostsData = createAsyncThunk(
  "blogData/fetchPostsData",
  async () => {
    try {
      const response = await API.get("posts");
      return response?.data;
    } catch (err) {
      alert(err);
    }
  }
);

export const fetchPostsComments = createAsyncThunk(
  "blogData/fetchPostsComments",
  async (postId) => {
    try {
      const response = await API.get(`posts/${postId}/comments`);
      return response.data;
    } catch (err) {
      alert(err);
    }
  }
);

export const fetchListUsers = createAsyncThunk(
  "blogData/fetchListUsers",
  async () => {
    try {
      const response = await API.get("users");
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
      const response = await API.get(`users/${userId}`);
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
    handlePostsComments(state, action) {
      state.listPostsComments = action.payload;
    },
    handleListUsers(state, action) {
      state.listUsers = action.payload;
    },
    handleUsersDetails(state, action) {
      state.usersDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsComments.fulfilled, (state, action) => {
      state.listPostsComments = action.payload;
    });
    builder.addCase(fetchPostsData.fulfilled, (state, action) => {
      state.listPosts = action.payload;
    });
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });
    builder.addCase(fetchUsersDetails.fulfilled, (state, action) => {
      state.usersDetails = action.payload;
    });
  },
});

export const {
  handlePostsData,
  handlePostsComments,
  handleListUsers,
  handleUsersDetails,
} = blogDataSlice.actions;

export const selectPostsData = (state) => state.blogData.listPosts;
export const selectPostsComments = (state) => state.blogData.listPostsComments;
export const selectListUsers = (state) => state.blogData.listUsers;
export const selectUsersDetails = (state) => state.blogData.usersDetails;

export default blogDataSlice.reducer;
