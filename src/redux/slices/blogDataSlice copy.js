import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../utils/api";

const initialState = {
  listPosts: [],
  listPostsComments: [],
  listUsers: [],
  listUsersComments: [],
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
/* 
export const fetchPostsComments = createAsyncThunk(
  "blogData/fetchPostsComments",
  async () => {
    try {
      const response = await Api.get(`posts`);
      return response.data;
    } catch (err) {
      alert(err);
    }
  }
);

export const fetchUsersData = createAsyncThunk(
  "blogData/fetchUsersData",
  async () => {
    try {
      const response = await Api.get("users");
      return response.data;
    } catch (err) {
      alert(err);
    }
  }
);

export const fetchUsersComments = createAsyncThunk(
  "blogData/fetchUsersComments",
  async () => {
    try {
      const response = await Api.get(`users`);
      return response.data;
    } catch (err) {
      alert(err);
    }
  }
);
 */
export const blogDataSlice = createSlice({
  name: "blogData",
  initialState,
  reducers: {
    handlePostsData(state, action) {
      state.listPosts = action.payload;
    },
    /*  handlePostsComments(state, action) {
      state.listPostsComments = action.payload;
    },
    handleUsersData(state, action) {
      state.listUsers = action.payload;
    },
    handleUsersComments(state, action) {
      state.listUsersComments = action.payload;
    }, */
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsData.fulfilled, (state, action) => {
      state.listPosts = action.payload;
    });
    /*  builder.addCase(fetchPostsComments.fulfilled, (state, action) => {
      state.listPostsComments = action.payload;
    });
    builder.addCase(fetchUsersData.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });
    builder.addCase(fetchUsersComments.fulfilled, (state, action) => {
      state.listUsersComments = action.payload;
    }); */
  },
});

export const {
  handlePostsData,
  /*   handlePostsComments,
  handleUsersData,
  handleUsersComments, */
} = blogDataSlice.actions;

export const selectPostsData = (state) => state.blogData.listPosts;
/* export const selectPostsComments = (state) => state.blogData.listPostsComments;
export const selectUsersData = (state) => state.blogData.listUsers;
export const selectUsersComments = (state) => state.blogData.listUsersComments; */

export default blogDataSlice.reducer;
