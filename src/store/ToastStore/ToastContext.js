import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    message: "",
    error: "",
    isVisible: false,
  },
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload;
      state.isVisible = true;
    },
    showError: (state, action) => {
      state.error = action.payload;
      state.isVisible = true;
    },
    hideToast: (state) => {
      state.message = null;
      state.error = null;
      state.isVisible = false;
    },
  },
});

export const toastReducer = toastSlice.reducer;
export const { showToast, showError, hideToast } = toastSlice.actions;
export const toastState = state => state.toastReducer;
