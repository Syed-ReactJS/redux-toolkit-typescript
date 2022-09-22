import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PostState {
  value: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}
const initialState: PostState = {
  value: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    createPost: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      // state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createPost } = counterSlice.actions;

export default counterSlice.reducer;
