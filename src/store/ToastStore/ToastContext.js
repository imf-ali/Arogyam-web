import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    message: "",
    isVisible: false,
  },
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload;
      state.isVisible = true;
    },
    hideToast: (state) => {
      state.message = null;
      state.isVisible = false;
    },
  },
});

export const toastReducer = toastSlice.reducer;
export const { showToast, hideToast } = toastSlice.actions;
export const toastState = state => state.toastReducer;
