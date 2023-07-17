import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
