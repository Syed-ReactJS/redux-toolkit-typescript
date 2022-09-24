import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface PostState {
  value: {
    post: string[];
    newPost: {};
  };
  loading: boolean;
  msg: string;
}
const initialState: PostState = {
  value: {
    post: [],
    newPost: {},
  },
  loading: false,
  msg: "",
};

//async thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    redirect: "follow",
  });
  const data = await response.json();
  console.log("res", data);

  return data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (payload: any) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "POST",
      body: payload,
    });
    const data = await response.json();
    console.log("res", data);

    return data;
  }
);

export const counterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      //for getting  posts
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading = true;
        state.msg = "Pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = "Success";
        state.value.post = action.payload;
        //action.payload?.data?.title ??
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.msg = "Failed";
      })

      //for creating  posts
      .addCase(createPost.pending, (state, action) => {
        state.loading = true;
        state.msg = "Pending";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = "Success";
        state.value.newPost = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.msg = "Failed";
      });
  },
});

// Action creators are generated for each case reducer function
// export const { fetchPosts } = counterSlice.actions;

export default counterSlice.reducer;
